import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgetPass from '../forgetPass';
import Login from '../login';
import ResetPass from '../resetPass';
import Signup from '../signup';

 
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgetpass' element={<ForgetPass/>} />
      <Route path='/resetpass' element={<ResetPass/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App