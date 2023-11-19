import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/sign-up' element={ <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
