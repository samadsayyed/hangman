import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import Welcome from './pages/welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import { AiFillHome } from "react-icons/ai";
import Rules from './pages/Rules'

function App() {

  return (
   
     <Router>
      <Link to={"/"}>
        <div className=' absolute top-3 left-3 text-2xl border-2 p-3 rounded-full border-black'>
      <AiFillHome />
        </div>
      </Link>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/rules' element={<Rules/>}/>
      </Routes>
     </Router>

  )
}

export default App
