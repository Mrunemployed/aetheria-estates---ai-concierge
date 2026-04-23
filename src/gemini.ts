/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";
import { Message } from "./types";
import { PROPERTIES, AGENT_DATA } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Aetheria Estates, a luxury real estate boutique.
Your goal is to assist visitors in finding properties, scheduling viewings, and learning about the agency.

AGENT INFO:
Name: ${AGENT_DATA.name}
Role: ${AGENT_DATA.title}
Bio: ${AGENT_DATA.bio}

AVAILABLE PROPERTIES:
${PROPERTIES.map(p => `- ${p.title} at ${p.location} ($${p.price.toLocaleString()}). Type: ${p.type}. Area: ${p.area}. Features: ${p.features.join(', ')}`).join('\n')}

GUIDELINES:
1. Be sophisticated, professional, and helpful. Use a high-end luxury brand voice.
2. If the user asks for a property, recommend the best matches from the list above.
3. If they want to schedule a viewing, ask for their preferred date and property name, then confirm you've noted it (simulated).
4. For lead capture, if they seem interested, ask for their name and email so Eleanor Vance can reach out personally.
5. Keep responses concise but elegant.
6. Do not mention that you are a language model. You are the AI Concierge of Aetheria Estates.
`;

export async function chatWithAI(history: Message[], userInput: string): Promise<string> {
  try {
    const formattedHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...formattedHistory, { role: 'user', parts: [{ text: userInput }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, but I am having trouble connecting to my knowledge base right now. Please try again or contact Eleanor Vance directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently unavailable due to high demand. Please feel free to reach out to Eleanor Vance via our contact form.";
  }
}
