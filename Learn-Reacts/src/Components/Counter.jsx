import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)

    const addValue = ()=>{
        if (count<20){
            setCount(count+1)
        }
    }

    const removeValue = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }
  return (
    <>
    <h1>Current Counter {count}</h1>
    <button onClick={addValue}>ADD VALUE</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
    
  )
}

export default Counter;
