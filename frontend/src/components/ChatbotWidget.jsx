import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the Antigravity AI assistant. How can I help you regarding courses, fees, or timings?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    // Simulate Groq API call to backend
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: `That's a great question about "${userMessage}". Our counseling team will formally answer this, but broadly, our JEE and NEET batches cover this comprehensively.` }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? 'hidden' : 'flex'} fixed bottom-6 right-6 p-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-lg shadow-primary-500/50 transition-transform hover:scale-105 z-50 cursor-pointer`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 glass-dark border border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col animate-slide-up h-[500px]">
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-white font-medium">Antigravity Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages body */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-900/50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-none p-3 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-800 border-t border-slate-700">
            <form onSubmit={handleSend} className="flex space-x-2 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about courses..." 
                className="flex-1 px-4 py-2 bg-slate-700 text-slate-200 border-none rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button 
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2 bg-primary-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-500 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
