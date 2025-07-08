import { useState } from 'react';
import InputPanel from './components/InputPanel';
import AnswerCard from './components/AnswerCard';

const mockResponse = {
  answer:
    "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
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
  const [answer, setAnswer] = useState(null);
  const [citations, setCitations] = useState([]);

  const handleSubmit = () => {
    setLoading(true);
    setAnswer(null);
    setCitations([]);

    setTimeout(() => {
      setAnswer(mockResponse.answer);
      setCitations(mockResponse.citations);
      setLoading(false);
    }, 2000);
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
      {answer && <AnswerCard answer={answer} citations={citations} />}
    </div>
  );
}
