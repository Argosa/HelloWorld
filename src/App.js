import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Bill' lastName='Clinton' age='73' hairColor='Grey'/>
      <PersonCard firstName='Barack' lastName='Obama' age='58' hairColor='Brown'/>
      <PersonCard firstName='George' lastName='Bush' age='73' hairColor='Grey'/>
      <PersonCard firstName='Theodore' lastName='Roosevelt' age='55' hairColor='Brown'/>
    </div>
  );
}

export default App;
