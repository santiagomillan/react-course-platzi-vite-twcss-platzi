import './styles.css'
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCardContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cardProducts.filter( product => product.id != id)
        context.setCardProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: context.cardProducts,
            totalProducrs: context.cardProducts.length,
            totalPrice: totalPrice(context.cardProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCardProducts([])
        context.setSearchByTitle(null)
    }

    return(
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} chakout-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                    <XMarkIcon 
                        className="h-6 w-6 text-black cursor-pointer" 
                        onClick={()=>context.closeCheckoutSideMenu()}
                    />
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cardProducts.map( product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.images}
                        price={product.price} 
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cardProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                        onClick={() => handleCheckout()}  
                        className='w-full bg-black py-3 text-white rounded-lg'
                        >Checkout</button>
                </Link>
            </div>

            {/* <figure className='p-6'>
                <img 
                    className='w-full h-full rounded-lg' 
                    src={context.productToShow.images?.[0]} 
                    alt={context.productToShow.title} 
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p> */}
        </aside>
    )
}

export default CheckoutSideMenu