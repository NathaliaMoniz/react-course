import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Producto from './components/Producto'

function App() {

  
  return (
    <>
      <BrowserRouter>

        <nav className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <NavLink to={'/'} className='nav-link'>Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/about'} className='nav-link'>About</NavLink>
          </li>
        </ul>
      </nav>

        <div className='container'>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/producto/:nombreParam' element={<Producto />}></Route>
          </Routes>
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App