import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { Home } from "./Home"
import Products from "./Products"
import { About } from "./About"

export const Pages: React.FC = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={ <Home />} />
                    <Route path="/products/*" element={ <Products /> } />
                    <Route path="/about" element={ <About /> } />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}