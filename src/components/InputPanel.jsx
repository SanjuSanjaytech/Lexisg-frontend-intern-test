import { useState } from 'react';
import { Mic, Plus, Send, Image, FileText } from 'lucide-react';

export default function InputPanel({ query, setQuery, loading, handleSubmit }) {
  const [focused, setFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex items-end gap-3 bg-[#40414f] px-4 py-3 rounded-xl border border-gray-600">
      {/* Left side tools */}
      <div className="flex items-center gap-2 text-gray-400">
        <button title="Add" className="hover:text-white">
          <Plus size={18} />
        </button>
        <button title="Upload Image" className="hover:text-white">
          <Image size={18} />
        </button>
        <button title="Upload File" className="hover:text-white">
          <FileText size={18} />
        </button>
      </div>

      {/* Text input */}
      <textarea
        rows={1}
        value={query}
        disabled={loading}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Message Lexi..."
        className="flex-1 resize-none bg-transparent outline-none text-white placeholder-gray-400 text-sm"
      ></textarea>

      {/* Right icons */}
      <div className="flex items-center gap-2">
        <button title="Voice" className="text-gray-400 hover:text-white">
          <Mic size={18} />
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          className="text-gray-400 hover:text-white"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
