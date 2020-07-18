import React from 'react';
import styles from "./styles/ListProducts.module.css";

const ListProducts = ({ product }) => {
    return (
        <div className={styles.Card}>
            <span className={styles.mr2}>Product: {product.color}</span>
            <span className={styles.mr2}>Department {product.department}</span>
            <span className={styles.mr2}>Name: {product.productName}</span>
            <span className={styles.mr2}>Price: {product.price}</span>
        </div>
    );
}

export default ListProducts;