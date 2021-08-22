import React from 'react';
import './App.css';
import Student from './components/Student';
import Staff from './components/Staff';


const App=()=> {
  return (
    <div className="App">
      <Student/>
      <Staff/>
    </div>
  );
}

export default App;
