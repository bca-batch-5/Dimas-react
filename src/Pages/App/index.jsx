import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgetPass from '../forgetPass';
import Login from '../login';
import Signup from '../signup';

 
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forgetpass' element={<ForgetPass/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App