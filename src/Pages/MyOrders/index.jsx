import Layout from "../../Components/Layout"
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import  OrdersCard  from "../../Components/OrdersCard"
import { Link } from "react-router-dom";
// import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrders() {
  const context = useContext(ShoppingCardContext)
  console.log(context.order)
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
          {
          context.order.map((order, index ) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                date={order.date}
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducrs}/>
            </Link>
          ))
          }
          
      </Layout>
    )
  }
  
  export default MyOrders
  