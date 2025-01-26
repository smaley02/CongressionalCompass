import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './styles/App.css';
import WelcomePage from './components/WelcomePage';
import CongressPage from './components/CongressPage';
import Congress119 from './components/Congress119';
import Congress118 from './components/Congress118';
// import Congress117 from './components/Congress117';
// import Congress116 from './components/Congress116';
// import Congress115 from './components/Congress115';
import BillsPage from './components/BillsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>SwampHacks 2025</h1>
          <nav>
            <ul>
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/congress">Members of Congress</Link></li>
              {/* <li><Link to="/bills">Bills Page</Link></li> */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/congress" element={<CongressPage />} />
            {/* <Route path="/bills" element={<BillsPage />} /> */}
            <Route path="/congress119" element={<Congress119 />} />
            <Route path="/congress118" element={<Congress118 />} />
            {/* <Route path="/congress117" element={<Congress117 />} />
            <Route path="/congress116" element={<Congress116 />} />
            <Route path="/congress115" element={<Congress115 />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
