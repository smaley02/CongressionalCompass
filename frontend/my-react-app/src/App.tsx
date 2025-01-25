import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './styles/App.css';

// Component definitions
//Welcome/Landing Page
const WelcomePage: React.FC = () => {
    return (
        <div
      className="page"
      //background photo
      style={{
        backgroundImage: "url('/congressphoto.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    >
        <div className="overlay"></div>
        <div className="content" style={{ marginTop: '100px' }}> 
        <h2 style={{ fontSize: '60px', textAlign: 'center', fontFamily: 'serif', }}>Welcome!</h2>
        </div>
        </div>
    );
};

//Members of Congress Page
const CongressPage: React.FC = () => {
    return (
        <div className="page">
            <h2>Members of Congress</h2>
            <p>This is the congressmen page.</p>
        </div>
    );
};

const BillsPage: React.FC = () => {
    return (
        <div className="page">
        <h2 className="page-header">Bills Page</h2>
            <p>This is the bills page.</p>
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
            <nav>
              <ul>
                <li><Link to="/">Welcome</Link></li>{/*Hotbar links*/}
                <li><Link to="/congress">Members of Congress</Link></li>
                <li><Link to="/bills">Bills Page</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/congress" element={<CongressPage />} />
              <Route path="/bills" element={<BillsPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  };
  
  export default App;

