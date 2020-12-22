import React, { useState } from 'react';
import './App.css';
import './components/ColorForm'
import ColorForm from './components/ColorForm';
import Results from './components/Results'

function App() {
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <ColorForm colors={state} setColor={setState}/>
      <Results colors={state} />
    </div>
  );
}

export default App;
