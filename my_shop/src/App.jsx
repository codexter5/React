import React, { useState, createContext } from 'react';
// import './mystyle.css';
import MyRoutes from './MyRoutes';
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './components/Layout/MyContext';
import counterReducer from './redux/counterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // ✅ Missing import

export const MyThemeContext = createContext();

const counterStore = createStore(counterReducer); // ✅ Moved outside component for performance

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Provider store={counterStore}>
        <MyThemeContext.Provider value={{ theme, setTheme }}>
          <MyContextProvider>
            <BrowserRouter>
              <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
                <button
                  className="bg-amber-300 px-4 py-2 fixed top-[30px] right-10 z-50"
                  onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
                >
                  {theme}
                </button>

                <MyRoutes />
              </div>
            </BrowserRouter>
          </MyContextProvider>
        </MyThemeContext.Provider>
      </Provider>

      <div className="bg-blue-500 text-white p-4 text-2xl">
        Tailwind is working!
      </div>
    </div>
  );
};

export default App;
