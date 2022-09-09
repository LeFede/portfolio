import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './pages/Home'
import { Game } from './pages/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Nav/>

      <main id='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/game' element={<Game/>}/>
          </Routes>
        </BrowserRouter>

        <Footer/>

      </main>

    </div>
  )
}

export default App
