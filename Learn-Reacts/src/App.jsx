import {useState}   from 'react'
import Time from './Components/DateTimeDisplay'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Time/>
    </>
  )
}

export default App
