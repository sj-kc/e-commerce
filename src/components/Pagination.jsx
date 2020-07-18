import React from 'react';


const Pagination = ({ productsPerPage, totalProducts, onPaginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {
                pageNumbers.map(number => {
                    return <a href="!#" key={number} onClick={() => onPaginate(number)}>{number}</a>
                })
            }
        </div>
    );
}

export default Pagination;