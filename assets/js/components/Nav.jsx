import React from "react"
import { BsArrowRightShort } from 'react-icons/bs'

export default function Nav() {
  return (
    <a href="https://github.com/Gabrielll04/Phoenix-React-Template" className="flex justify-center items-center font-semibold w-full h-10 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 cursor-pointer transition-all hover:space-x-1">
      <span className="bg-transparent">See the repository</span>
      <BsArrowRightShort size={33} className="bg-transparent"/>
    </a>
  )
}