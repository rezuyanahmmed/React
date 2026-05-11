import { useState } from 'react'

import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">

        <div>
          <DaisyNav></DaisyNav>
        </div>

      </section>




      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
