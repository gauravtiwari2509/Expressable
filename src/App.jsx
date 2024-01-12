import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import { Banner } from './Component/Banner/Banner'
import { Research } from './Component/ResearchSection/Research'

function App() {

  return (
    <>
        <Navbar/>
        <Banner/>
        <Research/>
    </>
  )
}

export default App
