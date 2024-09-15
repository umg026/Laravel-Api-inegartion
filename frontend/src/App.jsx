import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login'
import SignUp from './signup/Sign_up'
import Dashboard from './dashboard'


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
