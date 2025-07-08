import Citation from './Citation';

export default function AnswerCard({ answer, citations }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Answer:</h2>
      <p className="mb-4">{answer}</p>

      <div>
        <h3 className="text-md font-medium mb-1">Citations:</h3>
        {citations.map((cite, index) => (
          <Citation key={index} citation={cite} />
        ))}
      </div>
    </div>
  );
}