import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Components/Context'
import '../../App.css'
import Home from "../Home" 
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSiteMenu'


const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/my-account',
      element: <MyAccount/>
    },
    {
      path: '/my-order',
      element: <MyOrder/>
    },
    {
      path: '/my-orders',
      element: <MyOrders/>
    },
    {
      path: '/sign-in',
      element: <SingIn/>
    },
    {
      path: '/*',
      element: <NotFound/>
    }
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
