import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom' // used to render nested routes, (here the nested route will be sandwhiched between the Header and Footer)

// outlet lets pass routes dynamically, that is we can pass home, about etc. routes dynamically

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet /> {/* this is the nested route */}
            <Footer />
        </>
    )
}

export default Layout