import React from 'react';
import { Routes, Route} from "react-router-dom";
import WrapperComponent from './WrapperComponent/WrapperComponent'
import WelcomePage from './WelcomePage/WelcomePage'
import './App.css';



function App() {


  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="about" element={<WrapperComponent />} />
      </Routes>

    </div>
  );
}

export default App;
