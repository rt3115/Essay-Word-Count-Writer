import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Writer } from './components/Writer';
import { Button } from '@material-ui/core';
import wordIncreaser from './js/wordIncreaser.js'

function App() {
  
const [value, setValue] = React.useState();
const [output, setOutput] = React.useState([]);
  
const  callwordincreaser = async() => {
  setOutput(await wordIncreaser(value));
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Essay Word Count Writer
        </h1>

        <Writer
        value={value}
        onChange={setValue}
        />
        <Button
        onClick={callwordincreaser}
        className="submitButton"
        variant="contained"
        > 
        Submit me 
        </Button>
        <ol>
        {output.map((output, index) => <li key={index}><Writer key={index} value={output}/></li>)}
        </ol>

      </header>
    </div>
  );
}

export default App;
