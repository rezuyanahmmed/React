import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert('Iam clicked.')
  }

  const handleClick2 = () => {
    alert('Clicked 2')
  }

  const handle5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
      </section>
      <button onClick={handleClick}>click me</button>

      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() =>handle5(15)}>click 5</button>



      <section id="spacer"></section>


    </>
  )
}

export default App
