import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(7);
  const [number,setNumber] = useState(false);
  const [char,setChar] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str +="0123456789";
    if(char) str +="!@#$%&";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,number,char]) 

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          /><button className='outline-none rounded-md bg-blue-700 hover:bg-blue-800 active:scale-95 transition  text-white px-3 py-0.5 ml-1'
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            /><label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 mt-0.5'>
            <input type='checkbox'
            defaultChecked={number}
            id='numberInput'
            onChange={()=>{
              setNumber((prev)=>!prev);   
            }}>
            </input>
            <label htmlFor='numberInput' className='mb-1'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mt-0.5'>
            <input type='checkbox'
            defaultChecked={char}
            id='characterInput'
            onChange={()=>{
              setChar((prev)=>!prev);   
            }}>
            </input>
            <label htmlFor='characterInput' className='mb-1'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
