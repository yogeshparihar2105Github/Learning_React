import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Theme Changer</h1>
      <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>
    </>
  )
}

export default App
