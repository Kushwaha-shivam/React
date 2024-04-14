import Admin from './components/Admin/Admin'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App



