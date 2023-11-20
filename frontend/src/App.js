import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/sign-up' element={ <Register/>} />
        <Route path='/sign-in' element={ <Login/>} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
