import React from "react";
import logo from '../logo.svg'; 

const NavBar = () => {
    return(
        <nav className="flex h-[10vh] bg-black w-screen lg:py-4 lg:px-16 sm:p-8 items-center justify-between fixed top-0 right-0 left-0 z-10">
            <a className='sm:w-[140px] md:w-[200px]' href="/"><img className='w-full' src={logo} alt="daignal-logo"/></a>
            <button className="text-primary md:px-8 md:py-2 sm:py-2 sm:px-6 border-current border rounded-md font-bold" type="button">LOG IN</button>
        </nav>
    )
}

export default NavBar;