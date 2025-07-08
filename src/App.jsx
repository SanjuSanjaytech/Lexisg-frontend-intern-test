import { useState } from 'react';
import InputPanel from './components/InputPanel';

export default function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log('Query:', query);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Lexi Legal Assistant</h1>
      <InputPanel
        query={query}
        setQuery={setQuery}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
