import React from 'react';
import './App.css';

import Counter from './Counter';
import Step from './Step';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 classname="app-title">Aplikacja licznika w ReactJS</h1>
      </header>
      <Counter initValue={0}/>
      <Counter initValue={108} />
    </div>
  );
}

export default App;
