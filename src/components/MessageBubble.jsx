export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-4 rounded-xl max-w-[80%] ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-white text-gray-800 border rounded-bl-none shadow'
        }`}
      >
        {!isUser && message.structured ? (
          <>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Legal Position:</strong><br />
                Yes, in a motor accident claim under Section 166 of the Motor Vehicles Act, 1988,
                where the deceased was self-employed and aged 54–55 years at the time of death,
                the claimant is entitled to an addition towards future prospects.
              </p>

              <p>
                <strong>Key Judgment:</strong><br />
                The Punjab and Haryana High Court, in <em>Dani Devi v. Pritam Singh</em> (FAO No. 4353 of 2012),
                held that:  
                <br />
                <span className="italic">
                  “...as the age of the deceased at the time of accident was held to be about 54–55 years,
                  being self-employed, 10% of annual income should have been awarded on account of future prospects.”
                </span>
              </p>

              <p>
                <strong>Summary of Entitlement:</strong><br />
                • Category: Self-employed<br />
                • Age: 54–55 years<br />
                • Future Prospects Addition: 10% of the annual income
              </p>
            </div>

            {message.citations && message.citations.map((citation, idx) => (
              <div
                key={idx}
                className="mt-4 border-l-4 border-pink-400 bg-pink-50 p-3 rounded"
              >
                <p className="font-semibold text-sm">📄 {citation.source}</p>
                <p className="text-sm italic mt-1">
                  “{citation.text}” (Para 7)
                </p>
                <a
                  href={citation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  Download Judgment PDF
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  *Simulated scroll to Paragraph 7
                </p>
              </div>
            ))}
          </>
        ) : (
          <p className="whitespace-pre-wrap">{message.text}</p>
        )}
      </div>
    </div>
  );
}
