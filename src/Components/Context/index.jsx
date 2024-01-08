import { createContext } from "react";

const ShoppingCardContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    return(
        <ShoppingCardContext.Provider>
            {children}
        </ShoppingCardContext.Provider>
    )
}