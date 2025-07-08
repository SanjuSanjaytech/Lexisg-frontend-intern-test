export default function InputPanel({ query, setQuery, loading, handleSubmit }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <textarea
        className="w-full p-3 border border-gray-300 rounded resize-none"
        rows="5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your legal query here..."
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Submit'}
      </button>
    </div>
  );
}
