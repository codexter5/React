// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyRouter from './MyRouter'
import { MyContextProvider } from './components/MyContextProvider'
import { createContext, useState } from 'react'
export const MyThemeContext = createContext()

function App(){
  const [theme, setTheme] = useState('light')
  return (
    <>
    <MyThemeContext.Provider value={theme}>
    <MyContextProvider>
    <button 
className={`${theme=="dark"?'bg-blue-400': bg-amber-300} px-4 py-2 fixed top-3 right-3`}
     onClick={()=>{
      if(theme == 'light'){
        setTheme('dark')
      }else{
        setTheme('light')
      }
    }}
      >{theme}</button>
    <MyRouter></MyRouter>
    
    </MyContextProvider>
    </MyThemeContext.Provider>
    </>
  )
}

export default App