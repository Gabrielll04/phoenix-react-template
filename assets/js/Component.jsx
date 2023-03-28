import React, { useState } from 'react'
import { FaPhoenixFramework, FaReact } from 'react-icons/fa'
import Nav from './components/Nav'

function Container() {
  const [count, setCount] = useState(0)

  function handleCount() {
    setCount(count + 1)
  }

  return (
    <>
    <Nav />
    <div className='flex flex-col items-center w-screen h-screen space-y-10 p-60'>
      <div className='flex flex-row space-x-5'>
        <FaPhoenixFramework className='text-9xl' />
        <FaReact className='text-9xl' />
      </div>
      <button onClick={handleCount} className='bg-zinc-100 ring-1 ring-zinc-50 w-24 h-12 text-black text-lg font-semibold rounded-md active:ring active:ring-sky-400'>{count}</button>
      <span className='bg-transparent text-2xl'>This is the react-elixir boilerplate! Made by  <a href="https://github.com/Gabrielll04" className='text-sky-400 transition-all hover:text-sky-500 active:text-sky-600 cursor-pointer'>@Gabrielll04</a></span>
    </div>
  </>
  )
}
export default Container