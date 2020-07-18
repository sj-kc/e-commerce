import React from "react";
import { connect } from "react-redux";

const Products = ({ products }) => {
    console.log(products);
    return (
        <React.Fragment>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <p>{product.color}</p>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

const mapToProps = (state) => {
    return {
        products: state.products[0],
    };
};

export default connect(mapToProps)(Products);