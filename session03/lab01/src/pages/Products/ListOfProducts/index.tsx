import React from "react"

import data from '../../../data/data.json'
import ProductItem from "./ProductItem"
import { Link } from "react-router-dom"

export const ListOfProduct: React.FC = () => {
    return(
        <>
            <h3>List of Products</h3>
            <Link to="new">Create new Product</Link>
            {
                data.map((item, index) =>
                    <ProductItem key={index} id={item.id} name={item.name} price={item.price} />
                )
            }
        </>
    )
}