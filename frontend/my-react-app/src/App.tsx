// filepath: /Users/dylanpanganiban/swamphacks25/frontend/my-react-app/src/App.tsx
import React from 'react';
import './styles/App.css';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <ExampleComponent />
      </main>
    </div>
  );
}

export default App;