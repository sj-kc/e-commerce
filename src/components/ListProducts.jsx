import React from 'react';
import styles from "./styles/ListProducts.module.css";

const ListProducts = ({ product }) => {
    return (
        <div className="card">
            <div className="card_body">
                <h3 className={styles.mr2}>
                    {product.productName}
                    <span className="fs-12 block">{product.product}</span>
                </h3>
                <p>{product.description}</p>
                <span className="mr-2">Department:  {product.department}</span>
                <span className="mr-2">Color: {product.color}</span>
                <span className="float-right">Price: {product.price}</span>
            </div>
        </div>
    );
}

export default ListProducts;