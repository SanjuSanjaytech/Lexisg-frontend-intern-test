import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CitationPopup({ citation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-600 underline hover:text-blue-800"
      >
        View Source: {citation.source}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Citation PDF"
        className="bg-white p-4 rounded shadow-xl max-w-3xl w-full mx-auto mt-10 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
      >
        <h2 className="text-lg font-bold mb-4">Citation: {citation.source}</h2>

        <div className="w-full h-[75vh] border rounded overflow-hidden">
          <iframe
            src={citation.link}
            title="Citation PDF"
            width="100%"
            height="100%"
            className="rounded"
          />
        </div>

        <p className="mt-2 text-sm text-gray-600">
          *Simulated scroll to Paragraph 7 (not functional with SharePoint links)
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </Modal>
    </>
  );
}
