import { createContext, useState } from "react";

export const ShoppingCardContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const [productToShow, setProductToShow] = useState({})
    //shoppong card - add products to car
    const [cardProducts, setCardProducts] = useState([])

    return(
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            setCardProducts,
            cardProducts,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}