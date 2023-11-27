import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

  // let counter = 15

  function addValue(){
    if(counter<20){
    counter = counter + 1
    setCounter(counter)
    }
  }
  function decValue(){
    if(counter>0){
    counter = counter - 1
    setCounter(counter)
    }
  }
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={decValue}
      >Dec Value</button>

    </>
  )
}

export default App
