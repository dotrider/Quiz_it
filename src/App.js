import React, { useState } from 'react';
import Display from './Components/Display/Display'
import data from './Data'
import './App.css';

function App() {
    const [ cards, setCards ] = useState(data)



  return (
    <div className="App">
      <Display cards={cards}/>
    </div>
  );
}

export default App;
