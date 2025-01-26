import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../styles/CongressPage.css'; // Ensure you have this CSS file in your project

interface Candidate {
  Name: string;
  LastName: string;
  State: string;
  District: string;
  Party: string;
  Term: string;
  ImageUrl: string;
}

const CongressPage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

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

  const handleViewCompass = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseCompass = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className="top-aligned-page">
      <div className="overlay"></div>
      <div className="list">
        {candidates.map((candidate, index) => (
          <div key={index} className="list-row">
            <span>{candidate.Name}</span>
            <span>{candidate.State}</span>
            <span>District: {candidate.District}</span>
            <span>{candidate.Party}</span>
            <span>{candidate.Term}</span>
            <span onClick={() => handleViewCompass(candidate)} className="view-compass">View political compass</span>
          </div>
        ))}
      </div>

      {selectedCandidate && (
        <div className="compass-container">
          <div className="compass-overlay" onClick={handleCloseCompass}></div>
          <div className="compass-content">
            <span className="close-button" onClick={handleCloseCompass}>&times;</span>
            <img src={`/Master_Compass/${selectedCandidate.LastName}.png`} alt={`${selectedCandidate.LastName} political compass`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CongressPage;
