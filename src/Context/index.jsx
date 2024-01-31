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
    const [filteredItems, setFilteredItems] = useState(null)

    const [searchByTitle, setSearchByTitle] = useState(null)

    const [searchByCategory, setSearchByCategory] = useState(null)


    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item?.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
    }


    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item?.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if(searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType) {
            return items
        }
    }

    useEffect(() => { 
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY' ,items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy('null',items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

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
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}