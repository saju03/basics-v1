import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Blog from './pages/Blog'
import Error from './pages/Error'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import Shimmer from './components/Shimmer'
import user from './Utils/userContext'

const ProductDetails = lazy(() => import('./pages/ProductDetails'))

export default function App() {
  const [loginInfo, setLoginInfo] = useState({
    name:null
  })

  
  const HomeLayout = () => {
    return <>
      <user.Provider value={loginInfo}>
        <Navbar />  </user.Provider>
        <Outlet />
        <Footer />
    
    </>
  }

  useEffect(() => {
    // get login info
    const data = {
      name: 'loggedin saju'

    }
    setLoginInfo(data)
  }, [])


  const AdminLayout = () => {
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
          path: '/product/:productId',
          element: <Suspense fallback={<Shimmer />}><ProductDetails /></Suspense>
        }
      ],
      errorElement: <Error />
    },


  ])


  return (<RouterProvider router={AppLayout} />)
}
