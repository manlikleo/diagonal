import React from "react";
import logo from '../logo.svg'; 

const NavBar = () => {
    return(
        <nav className="flex h-[10vh] bg-black w-full py-4 px-16 items-center justify-between fixed top-0 left-0 z-10">
            <a href="/"><img src={logo} alt="daignal-logo"/></a>

            <button className="text-primary px-8 py-2 border-current border rounded-md font-bold" type="button">LOG IN</button>
        </nav>
    )
}

export default NavBar;