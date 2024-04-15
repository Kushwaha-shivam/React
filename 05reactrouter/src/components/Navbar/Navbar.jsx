import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className="text-white body-font bg-black">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/home" className="mr-5 font-semibold">Home</Link>
                        <Link to="/shop" className="mr-5 font-semibold">Shop</Link>
                        <Link to="/admin" className="mr-5 font-semibold">Admin</Link>
                        <Link to="/contact" className="mr-5 font-semibold">Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
