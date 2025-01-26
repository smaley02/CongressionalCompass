import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div
      className="page"
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
        <h2 style={{ fontSize: '60px', textAlign: 'center', fontFamily: 'serif' }}>Welcome!</h2>
      </div>
    </div>
  );
};

export default WelcomePage;
