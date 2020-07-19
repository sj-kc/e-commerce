import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/Pagination.module.css"

const Pagination = ({ productsPerPage, totalProducts, onPaginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="mt-10 text-center">
            {
                pageNumbers.map(number => {
                    return <Link
                        className={`${styles.link}`}
                        to="/"
                        key={number}
                        onClick={() => {
                            document.querySelector("#content-page").scrollIntoView()
                            onPaginate(number)
                        }}>
                        {pageNumbers.length <= 1 ? '' : number}
                    </Link>
                })
            }
        </div>
    );
}

export default Pagination;