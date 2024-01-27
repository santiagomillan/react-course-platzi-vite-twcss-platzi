import { createContext, useState, useEffect } from "react";

export const ShoppingCardContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const [productToShow, setProductToShow] = useState({})
    //shoppong card - add products to car
    const [cardProducts, setCardProducts] = useState([])
    
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //chopping card Order
    const [order, setOrder] = useState([])

    //get products 
    const [items, setItems] = useState(null)

    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log(searchByTitle)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

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
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}