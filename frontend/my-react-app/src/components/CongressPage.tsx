import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // Make sure to install this library
import '../styles/CongressPage.css'; // Ensure you have this CSS file in your project

interface Candidate {
  Name: string;
  Processed_Name: string;
  State: string;
  Party: string;
  Congresses: string;
}

const CongressPage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('/candidates.csv'); 
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
        }
        if (!response.body) {
          throw new Error("Response body is null");
        }

        const reader = response.body.getReader();
        const { value, done } = await reader.read();
        if (done) {
          throw new Error("No data received from the response");
        }

        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(value);

        const results = Papa.parse(csv, { header: true });

        setCandidates(results.data as Candidate[]);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="top-aligned-page">
      <div className="overlay"></div>
      <div className="list">
        {candidates.map((candidate, index) => (
          <div key={index} className="list-row">
            {/* <span>{candidate.Name}</span> */}
            <span>{candidate.Processed_Name}</span>
            <span>{candidate.State}</span>
            <span>{candidate.Party}</span>
            <span>{candidate.Congresses}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CongressPage;
