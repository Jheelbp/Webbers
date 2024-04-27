

/*import { Navbar } from './components/Navbar';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from'./startpage/AppSP';
import NavbarSP from './startpage/componentsSP/NavbarSP';


function App() {
  return (
    <div className='App'>
        <Router>
          <NavbarSP />
          <Routes>
            <Route path="/"  element={ <Home />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
