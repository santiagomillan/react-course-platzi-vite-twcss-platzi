import Layout from "../../Components/Layout"
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {
  const context = useContext(ShoppingCardContext)
    return (
        <Layout>
          <div className="flex items-center justify-center relative w-80 mb-6">
            <Link to="/my-orders" className="absolute left-0">
              <ChevronLeftIcon 
                className="h-6 w-6 text-black cursor-pointer " 
              />
            </Link>
            <h1>My Order</h1>
        </div>
          <div className='flex flex-col w-80'>
          {/* px-6 overflow-y-scroll flex-1 */}
            {
                context.order?.slice(-1)[0].products.map( product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.images}
                        price={product.price} 
                    />
                ))
            }
            </div>
        </Layout>
    )
  }
  
  export default MyOrder
  