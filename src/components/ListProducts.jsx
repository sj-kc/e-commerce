import React from 'react';

const ListProducts = ({ product }) => {
    return (
        <div className="card col-4 m-10">
            <div className="card_body">
                <h3>
                    {product.productName}
                    <span className="fs-12 block">{product.product}</span>
                </h3>
                <p>{product.description}</p>
                <span className="mr-2">Department:  {product.department}</span>
                <span className="mr-2">Color: {product.color}</span>
                <h4>${product.price}</h4>
            </div>
        </div>
    );
}

export default ListProducts;