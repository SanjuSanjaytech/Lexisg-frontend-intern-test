export default function Citation({ citation }) {
  return (
    <div className="p-2 mt-2 border-l-4 border-blue-600 bg-blue-50 rounded">
      <p className="text-sm italic mb-1">"{citation.text}"</p>
      <a
        href={citation.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 text-sm underline hover:text-blue-900"
      >
        View Source: {citation.source}
      </a>
      <p className="text-xs text-gray-500 mt-1">
        *Simulated highlight: Paragraph 7
      </p>
    </div>
  );
}
