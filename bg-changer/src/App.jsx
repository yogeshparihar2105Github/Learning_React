import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      
      <button 
        onClick={() => {setColor("red")}} 
        style={{backgroundColor:"red"}}>
        red
      </button>

      <button 
        onClick={() => {setColor("blue")}} 
        style={{backgroundColor:"blue"}}>
        blue
      </button>

      <button 
        onClick={() => {setColor("green")}} 
        style={{backgroundColor:"green"}}>
        green
      </button>
     
   </div>
  )
}

export default App
