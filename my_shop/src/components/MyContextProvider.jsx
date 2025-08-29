import { createContext } from "react";

export const Mycontext = createContext()

export const MyContextProvider = ({children}) => {
    return <MyContextProvider value={"Good Morning"}>
        {children}
    </MyContextProvider>
}