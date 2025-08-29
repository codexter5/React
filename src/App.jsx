import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyRouter from './MyRouter'
import { MyContextProvider } from './components/MyContextProvider'

function App() {
  return (
    <>
    <MyContextProvider>

        <MyRouter></MyRouter>

    </MyContextProvider>
    </>
  )
}

export default App
