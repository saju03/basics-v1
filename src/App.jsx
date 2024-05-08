import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Blog from './pages/Blog'
import Error from './pages/Error'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import ProductDetails from './pages/ProductDetails'


export default function App() {



  const HomeLayout = () => {
   return <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  }


const AdminLayout = ()=>{
  return <>
  {/* admin header  */}
  </>
}


  const AppLayout = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path:'/product/:productId/:seller',
          element:<ProductDetails/>
        }
      ]
    },


  ])


  return (<RouterProvider router={AppLayout} />)
}
