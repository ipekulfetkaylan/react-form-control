import { useState } from 'react';
import './App.css';
import Control from './components/Control';
import Form from './components/Form';

function App() {
  const [control, setControl]= useState({
    info1:false,
    info2:false,
    info3:false
  });
  
  return (
    <div className="App">
      <Form setControl={setControl} control={control}/>
      <Control control={control}/>
     
    </div>
  );
}

export default App;
