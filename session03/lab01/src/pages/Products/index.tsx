import React from "react"
import { Routes, Route } from 'react-router-dom'

import './style.css'
import { ListOfProduct } from "./ListOfProducts"
import { DetailOfProduct } from "./DetailOfProduct"
import { CreateProduct } from "./CreateProduct"

const Products: React.FC = () => {
    return(
        <div className='product'>
            <Routes>
                <Route index element={ <ListOfProduct /> } />
                <Route path=":id" element={ <DetailOfProduct /> } />
                <Route path="new" element={ <CreateProduct /> } />
            </Routes>
        </div>
    )
}

export default Products