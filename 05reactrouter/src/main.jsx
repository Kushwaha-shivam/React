import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Admin from './components/Admin/Admin.jsx'
import Shop from './components/Shop/Shop.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />

        },
        {
            path: "/home",
            element: <Home />
        },
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
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
