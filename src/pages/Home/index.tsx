import { Game } from "../Game";
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <section className='section' id='me'>
        <h1 className='section--title'>Hey I am LeFede</h1>
        <p className='section--subtitle size-2'>a web developer</p>
        {/* <Link to='https://www.google.com'>Game</Link> */}
        <a href="https://game-theta-lilac.vercel.app/" target="_blank">AAAAAAAAAA</a>
      </section>

      <section className='section' id='playgrounds'>
        <h2 className='section--title'>Playgrounds</h2>
      </section>

      <section className='section' id='contact'>
        <h2 className='section--title'>Contact</h2>
      </section>

      <section className='section' id='projects'>
        <h2 className='section--title'>Projects</h2>
      </section>

      <section className='section' id='work'>
        <h2 className='section--title'>Let's work together...</h2>
      </section>
    </>
  )
}
