import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Programacion from './pages/Programacion'
import Marketing from './pages/Marketing'
import PackIntegral from './pages/PackIntegral'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <div className='main-content'>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/programacion' element={<Programacion />} />
    <Route path='/marketing' element={<Marketing />} />
    <Route path='/pack-integral' element={<PackIntegral />} />
    <Route path='/nosotros' element={<Nosotros />} />
    <Route path='/contacto' element={<Contacto />} />

   </Routes>
   </div>
   <Footer/>
   </BrowserRouter>

  )
}

export default App;
