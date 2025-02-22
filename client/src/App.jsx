import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { AppShell } from '@mantine/core'
function App() {
 
  return (
    <>
    <AppShell>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Home />
      </AppShell.Main>
    </AppShell>
    </>
  )
}

export default App
