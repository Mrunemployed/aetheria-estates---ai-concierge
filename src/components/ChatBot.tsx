/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { chatWithAI } from '../gemini';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Aetheria Estates. I am your AI Concierge. How may I assist your property search today?", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithAI(messages, input);
      const aiMsg: Message = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered a brief interruption. Please try again.", timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div hidden>
      <div className="fixed bottom-8 right-8 z-[100]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-accent/90 transition-all border-4 border-white"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-80 md:w-96 bg-white shadow-2xl rounded-2xl overflow-hidden z-[100] border border-primary/5 shadow-accent/10"
          >
            <div className="bg-primary p-6 text-white ">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">AI Concierge</h4>
                  <p className="text-[10px] uppercase tracking-widest text-accent/60">Aetheria Estates</p>
                </div>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="h-96 overflow-y-auto p-6 space-y-6 bg-[#FBFBF9] custom-scrollbar"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-primary/5 ml-3' : 'bg-accent/10 mr-3'}`}>
                      {msg.role === 'user' ? <User size={14} className="text-primary/40" /> : <Bot size={14} className="text-accent" />}
                    </div>
                    <div className={`p-4 rounded-xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-primary/5 shadow-sm rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2 text-accent">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Curating response...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-primary/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center space-x-2"
              >
                <input 
                  type="text" 
                  placeholder="Inquire about properties..."
                  className="flex-1 bg-primary/5 border-none outline-none px-4 py-3 text-xs tracking-wide focus:ring-1 focus:ring-accent/30 rounded-lg transition-all"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 transition-all"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
