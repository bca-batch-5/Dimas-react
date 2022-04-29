import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home';

 
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/login' element={</>} />
      <Route path='/signup' element={<signup/>} />
      <Route path='/forgetPassword' element={<forgetPass/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App