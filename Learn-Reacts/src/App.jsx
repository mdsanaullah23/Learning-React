import {useState}   from 'react'
import Time from './Components/DateTimeDisplay'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Time/>
      <Counter/>
    </>
  )
}

export default App
