import { useState } from "react"
function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{background:color}}>
        <div className="fixed flex flex-wrap justify-center
         bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("#E72929")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#E72929'}}>Red</button>
          <button 
          onClick={()=>setColor("#5BBCFF")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#5BBCFF'}}>Blue</button>
          <button 
          onClick={()=>setColor("#BED754")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#BED754'}}>Light Green</button>
          <button 
          onClick={()=>setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'gray'}}>Gray</button>
          <button 
          onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'black'}}>Black</button>
          <button 
          onClick={()=>setColor("#FFD23F")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#FFD23F'}}>Yellow</button>
          <button 
          onClick={()=>setColor("#704264")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#704264'}}>Peach</button>
          <button 
          onClick={()=>setColor("#EE4266")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#EE4266'}}>Pink</button>
          <button 
          onClick={()=>setColor("#5E1675")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background:'#5E1675'}}>Purple</button>
          </div>
          
         </div>
      </div>
    </>
  )
}

export default App
