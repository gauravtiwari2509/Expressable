import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import { Banner } from './Component/Banner/Banner'
import { Research } from './Component/ResearchSection/Research'
import { UserCriteria } from './Component/UserCriteria/UserCriteria'
import { Tracker } from './Component/Tracker/Tracker'
import LoveExpressable from './Component/LoveExpressable/LoveExpressable'

function App() {

  return (
    <>
        <Navbar/>
        <Banner/>
        <Research/>
        <UserCriteria/>
        <Tracker/>
        <LoveExpressable/>
    </>
  )
}

export default App
