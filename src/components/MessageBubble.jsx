import { Send } from 'lucide-react';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2 px-4`}>
      <div
        className={`p-3 rounded-lg max-w-[80%] ${
          isUser ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {!isUser && message.structured ? (
          <>
            <div className="space-y-3 text-base">
              <p>
                <strong className="font-semibold">Legal Position:</strong><br />
                Yes, in a motor accident claim under Section 166 of the Motor Vehicles Act, 1988,
                where the deceased was self-employed and aged 54–55 years at the time of death,
                the claimant is entitled to an addition towards future prospects.
              </p>

              <p>
                <strong className="font-semibold">Key Judgment:</strong><br />
                The Punjab and Haryana High Court, in <em>Dani Devi v. Pritam Singh</em> (FAO No. 4353 of 2012),
                held that:  
                <br />
                <span className="italic">
                  “…as the age of the deceased at the time of accident was held to be about 54–55 years,
                  being self-employed, 10% of annual income should have been awarded on account of future prospects.”
                </span>
              </p>

              <p>
                <strong className="font-semibold">Summary of Entitlement:</strong><br />
                • Category: Self-employed<br />
                • Age: 54–55 years<br />
                • Future Prospects Addition: 10% of the annual income
              </p>
            </div>

            {message.citations && message.citations.map((citation, idx) => (
              <div
                key={idx}
                className="mt-3 bg-gray-50 p-2 rounded-md text-sm"
              >
                <p className="font-medium text-gray-700">📄 {citation.source}</p>
                <p className="text-gray-600 italic mt-1">
                  “{citation.text}” (Para 7)
                </p>
                <a
                  href={citation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Judgment PDF
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  *Simulated scroll to Paragraph 7
                </p>
              </div>
            ))}
          </>
        ) : (
          <p className="whitespace-pre-wrap text-base">{message.text}</p>
        )}
      </div>
    </div>
  );
}