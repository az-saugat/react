import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
 
  const addValue=()=>{
    if(count<20){
    count=count+1;
    }
    setCount(count);
  }
  const subtractValue=()=>{
    if(count>0){
    count=count-1;
    }
    setCount(count);
  }
  return (
   <>
   <h2>Counter Value: {count}</h2>
   <button
   onClick={addValue}>Increase Value</button><br /><br/>
   <button
   onClick={subtractValue}>Decrease Value</button>
   </>
  )
}

export default App
