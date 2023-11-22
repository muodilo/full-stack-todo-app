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
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/sign-up' element={ <Register/>} />
        <Route path='/sign-in' element={<Login />} />
          <Route path='/my-todos' element={<PrivateRoute />}>
          <Route path='/my-todos' element={<MyTodos/> } />
          </Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </Router>
  );
}

export default App;
