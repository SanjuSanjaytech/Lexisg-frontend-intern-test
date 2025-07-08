import { useState, useEffect, useRef } from 'react';
import InputPanel from './components/InputPanel';
import MessageBubble from './components/MessageBubble';

const mockResponse = {
  answer:
    "Yes, in a motor accident claim under Section 166 of the Motor Vehicles Act, 1988, where the deceased was self-employed and aged 54–55 years at the time of death, the claimant is entitled to an addition towards future prospects.",
  citations: [
    {
      text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
    },
  ],
};

export default function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const handleSubmit = () => {
    if (!query.trim()) return;
    setLoading(true);
    const userMessage = { role: 'user', text: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery('');

    setTimeout(() => {
      const assistantMessage = {
        role: 'assistant',
        text: mockResponse.answer,
        citations: mockResponse.citations,
        structured: true,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#343541]">
      <header className="p-4 shadow-sm bg-white border-b text-gray-800 font-semibold text-center text-xl">
        Lexi Legal Chat
      </header>
      <main className="flex-1 overflow-auto px-4 py-6 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} message={msg} />
          ))}
          {loading && <p className="text-center text-gray-500">Generating response...</p>}
          <div ref={bottomRef} />
        </div>
      </main>
      <footer className="bg-white border-t p-4">
        <div className="max-w-3xl mx-auto">
          <InputPanel
            query={query}
            setQuery={setQuery}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </div>
      </footer>
    </div>
  );
}
