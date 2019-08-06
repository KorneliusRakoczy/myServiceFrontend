import React from 'react';
import './css/App.css';
import ReactStoreIndicator from 'react-score-indicator'
import AreaChart from './components/AreaChart';

function App() {

  let maxValue = 70;
  let score = 40;

  return (
    <div className="App">
      <header className="App-header">

        <ReactStoreIndicator
          value={score}
          maxValue={maxValue}
          width={200}
          lineWidth={30}
          lineGap={7}
        />
        <AreaChart/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
