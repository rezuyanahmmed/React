import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import counter from './counter';
import Counter from './counter'

import Friends from './friends'

import Post from './post'

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
  // posts er
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }

  const postsPormise = fetchPosts()

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
      <button></button>

      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() => handle5(25)}>click 5</button>   {/*ekhane amra handle5 function e 5 jog korechi and ekhane button e eshe eta amra call korechi onclick er vitor arrow symble diye ,,arrow symble er vitor oi function take call kore oi 5 er sathe ekhaner double bracket er somgkha take jog korechi...  */}


      <Counter></Counter>

      <Suspense fallback={<h2>Friends are comming for treat...</h2>}>
        <Friends></Friends>
      </Suspense>

      {/* posts er  */}
      <Suspense fallback={<h4>Posts are comming...</h4>}>
        <Post postsPormise={postsPormise}></Post>
      </Suspense>


      <section id="spacer"></section>


    </>
  )
}

export default App
