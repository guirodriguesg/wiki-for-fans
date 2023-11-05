import React from "react";

const Header = () => {
    return (
        <>
            <nav className="bg-gray-900 flex items-center fixed top-0 left-0 right-0 opacity-90">
                <div className="max-w-screen-xl flex items-center mx-auto p-4">
                    <a href="/" className="flex items-center">
                            <img className="w-16 h-16" src="../src/assets/img/header/logo-vikings.png"/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header;