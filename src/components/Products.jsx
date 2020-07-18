import React, { useState } from "react";
import { connect } from "react-redux";
import selectProducts from "../selectors/products";
import Navbar from './Navbar';
import Pagination from './Pagination';
import ListProducts from "./ListProducts";

const Products = ({ products }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(10)

    const lastProducts = currentPage * productsPerPage;
    const firstProducts = lastProducts - productsPerPage;
    const currentProducts = products.slice(firstProducts, lastProducts)

    const onPaginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <React.Fragment>
            <Navbar />
            {currentProducts.map((product) =>
                <ListProducts product={product} key={product.id} />
            )}
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} onPaginate={onPaginate} />
        </React.Fragment>
    );
};

const mapToProps = (state) => {
    return {
        products: selectProducts(state.products[0], state.filters),
    };
};

export default connect(mapToProps)(Products);