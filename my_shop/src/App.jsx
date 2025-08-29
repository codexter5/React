import { useState, createContext } from 'react'
import MyRouter from './MyRouter'
import { MyContextProvider } from './components/MyContextProvider'

// Import your Button component or use a native button
// import Button from './components/Button' // Uncomment if you have one

export const MyThemeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <MyThemeContext.Provider value={theme}>
      <MyContextProvider>
        <button
          className={`${
            theme === 'dark' ? 'bg-blue-400' : 'bg-amber-300'
          } px-4 py-2 fixed top-[30px] right-10`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme}
        </button>

        <MyRouter />
      </MyContextProvider>
    </MyThemeContext.Provider>
  )
}

export default App

