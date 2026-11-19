import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let post='경기도';

  return (
    <>
      <div className="APP">
        <div className="black-nav">
          <h4>React blog</h4>
        </div>

        <h4>{post}</h4>
      </div>
    </>
  )
}

export default App
