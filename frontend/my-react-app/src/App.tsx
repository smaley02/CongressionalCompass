import React, {useState} from 'react';
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
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
    
    return (
        <div className="top-aligned-page"
        style={{
            backgroundImage: "url('/congressseal.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
          }}>
            <div className="overlay"></div>

            <h2>Members of Congress</h2>
            <p>This is the congressmen.</p>
            <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Select Congress</button>
          <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
            <a href="/congress119">119th Congress</a>
            <a href="/congress118">118th Congress</a>
            <a href="/congress117">117th Congress</a>
            <a href="/congress116">116th Congress</a>
            <a href="/congress115">115th Congress</a>
          </div>
        </div>
        </div>
        
    );
};

// Congress Pages Components
const Congress119: React.FC = () => {
    return (
      <div className="top-aligned-page" style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginTop: '20px', color: 'black' }}>119th Congress</h2>
      </div>
    );
  };

  const Congress118: React.FC = () => {
    return (
      <div className="top-aligned-page" style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginTop: '20px',color: 'black'  }}>118th Congress</h2>
      </div>
    );
  };

  const Congress117: React.FC = () => {
    return (
      <div className="top-aligned-page" style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginTop: '20px',color: 'black'  }}>117th Congress</h2>

      </div>
    );
  };
  
  const Congress116: React.FC = () => {
    return (
      <div className="top-aligned-page" style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginTop: '20px',color: 'black'  }}>116th Congress</h2>
      </div>
    );
  };
  
  const Congress115: React.FC = () => {
    return (
      <div className="top-aligned-page" style={{ backgroundColor: '#f0f0f0', height: '100vh', width: '100vw' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginTop: '20px',color: 'black'  }}>115th Congress</h2>
        </div>
    );
  };
const BillsPage: React.FC = () => {
    return (
        <div className=" top-aligned-page">
        <h2 style={{ margin: '0', padding: '0' , color: 'black'}}>Bills Page</h2>

        <p style={{color: 'black'}}>This is the bills page.</p>
        
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
              <Route path="/congress119" element={<Congress119 />} />
              <Route path="/congress118" element={<Congress118 />} />
              <Route path="/congress117" element={<Congress117 />} />
              <Route path="/congress116" element={<Congress116 />} />
              <Route path="/congress115" element={<Congress115 />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  };
  
  export default App;

