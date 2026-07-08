import React from "react"
import { Link } from "react-router-dom"

export const CreateProduct: React.FC = () => {
    return(
        <>
            <h3>Create new Product</h3>
            <form action="/products" method="get">
                <fieldset>
                    <legend>Product information</legend>
                    <div>
                        <label>Product name:</label>
                        <input type="text" placeholder="Input product name" />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input type="number" placeholder="Inter price of product" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                        <Link to="/products">Cancel</Link>
                    </div>
                </fieldset>
            </form>
        </>
    )
}