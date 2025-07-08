import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function InputPanel({ query, setQuery, loading, handleSubmit }) {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-lg py-4">
      <div className="m-auto max-w-4xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex items-center gap-3 px-4"
        >
          {/* Text input */}
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              disabled={loading}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your legal question here..."
              className="w-full py-3 px-4 bg-gray-100 rounded-full text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-300 text-base"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className={`p-2 rounded-full ${
              loading || !query.trim()
                ? 'bg-gray-200 text-gray-400'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            } transition-colors duration-200`}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send size={20} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}