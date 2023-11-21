import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MyTodos from './pages/MyTodos';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/sign-up' element={ <Register/>} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/my-todos' element={<MyTodos/> } />
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
