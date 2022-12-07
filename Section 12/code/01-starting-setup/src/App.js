import React, { useState, useCallback } from 'react';
import DemoOutPut from './components/Demo/DemoOutPut';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggle = useCallback(()=>{
    setShowParagraph( prevShowParagraph => !prevShowParagraph )
  }, []) // Funciona igual que con useEffect()

  console.log('APP RUNNIG')
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={false}/>
      <Button onClick={toggle}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
