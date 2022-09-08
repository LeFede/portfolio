import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='navbar'>
        <ul className='navbar--menu container'>
          <li className='navbar--menu--item navbar--menu--item-left'><a href='#me'>Logo</a></li>
          <li className='navbar--menu--item'><a href='#projects'>Projects</a></li>
          <li className='navbar--menu--item'><a href='#playgrounds'>Playgrounds</a></li>
          <li className='navbar--menu--item'><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <main className='main'>

        <section className='section' id='me'>
          <h1 className='section--title'>Federico Andres</h1>
        </section>

        <section className='section' id='playgrounds'>
          <h1 className='section--title '>Playgrounds</h1>
        </section>

        <section className='section' id='contact'>
          <h1 className='section--title '>Contact</h1>
        </section>

        <section className='section' id='projects'>
          <h1 className='section--title '>Projects</h1>
        </section>


      </main>
    </div>
  )
}

export default App
