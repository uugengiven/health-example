import React from 'react';
import './App.css';
import {HealthCheck, MultiHealthCheck} from './Components/HealthCheck';

function App() {
  return (
    <div className="App">
      <header className="check-container">
        <HealthCheck endpoint="https://basic-bundle-tight-firefly-f0dd.owners.workers.dev/health/database"/>
        <MultiHealthCheck endpoint="https://basic-bundle-tight-firefly-f0dd.owners.workers.dev/health"/>
      </header>
    </div>
  );
}

export default App;
