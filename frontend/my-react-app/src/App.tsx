import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './styles/App.css';

// Component definitions
const WelcomePage: React.FC = () => {
    const navigate = useNavigate();
    console.log('WelcomePage updated');

    const handlePrevious = () => navigate('/about');
    const handleNext = () => navigate('/example');

    return (
        <div className="page">
            <h2 style={{ fontSize: '60px', textAlign: 'center' }}>Welcome!</h2>
            {/* <p style={{ fontSize: '20px', textAlign: 'center' }}>This is the updated welcome page text.</p> */}
            <div className="image-container">
  <img src="/congresshor.png" alt="Welcome" />
  <img src="/congresssenate.png" alt="Welcome" />
</div>
            <div 
            className="navigations">
                <button className="button" onClick={handlePrevious}>&larr; Bills</button>
                <button className="button" onClick={handleNext}>Members of Congress &rarr;</button>
            </div>
        </div>
    );
};

const ExamplePage: React.FC = () => {
    const navigate = useNavigate();
    console.log('ExamplePage updated');

    const handlePrevious = () => navigate('/');
    const handleNext = () => navigate('/about');

    return (
        <div className="page">
            <h2>Members of Congress</h2>
            <p>This is an example page.</p>
            <div className="navigation">
                <button className="button" onClick={handlePrevious}>Previous</button>
                <button className="button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    console.log('AboutPage updated');

    const handlePrevious = () => navigate('/example');
    const handleNext = () => navigate('/');

    return (
        <div className="page">
            <h2>Bills Page</h2>
            <p>This is the about page.</p>
            <div className="navigation">
                <button className="button" onClick={handlePrevious}>Previous</button>
                <button className="button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

// App component
const App: React.FC = () => {

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>SwampHacks 2025</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/example" element={<ExamplePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

