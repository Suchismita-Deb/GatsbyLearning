import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import "normalize.css" // Getting the normalize css after installing.
import '../assets/css/main.css'// Getting the main css file.

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout