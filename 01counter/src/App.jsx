import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
  if(count < 20){
    setCount(count+1)
  }
}

  const removeValue =  ()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h3>CURRENT COUNTER VALUE {count}</h3>
      <div className="card">
      <button onClick={addValue}>Add  Value {count}</button>
        <button onClick={removeValue}>Remove Value {count}</button>
        <p>Footer {count}</p>
      </div>
    </>
  )
}

export default App
