import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from "./styles/ListProducts.module.css"
import { addOrder } from './../store/actions/order';

const ListProducts = ({ product, order }) => {
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
            <Link
                to={`/e-commerce/orders/${product.id}`}
                className={`${style.link} btn btn-primary`}
                onClick={() => {
                    order(product)
                }}>
                Buy
            </Link>
        </div>
    );
}


const mapDispatchProps = (dispatch) => {
    return {
        order: (order) => dispatch(addOrder(order))
    }
}

export default connect(undefined, mapDispatchProps)(ListProducts);