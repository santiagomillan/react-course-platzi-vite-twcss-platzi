import { useContext } from "react";
import { ShoppingCardContext } from "../Context";
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = (data) => {
    const context = useContext(ShoppingCardContext)
    const { 
        category, 
        // creationAt, 
        // description, 
        // id, 
        images,
        price,
        title, 
        // updatedAt,
    } = data.data;

    const showProduct = (productDelail) => {
        context.openProductDetail()
        context.setProductToShow(productDelail)
    } 

    const addProductsToCard = (productData) => {
        context.setCount(context.count + 1)
        context.setCardProducts([...context.cardProducts, productData])
        console.log("product", context.cardProducts)
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={()=> showProduct(data.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category?.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
                {/* <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div> */}
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={() => addProductsToCard(data.data)}
                >
                    <PlusIcon className="h-6 w-6 text-black" />
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light ">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </div>
    )
}

export default Card;