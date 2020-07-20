import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOrder } from "./../store/actions/order";
import style from "./styles/ListProducts.module.css";

const ListProducts = ({ product, orders, setorder }) => {
	const ordered = () => orders.find((order) => order.id === product.id);

	return (
		<div className="card col-4 m-10">
			<div className="card_body">
				<h3>
					{product.productName}
					<span className="fs-12 block">{product.product}</span>
				</h3>
				<p>{product.description}</p>
				<span className="mr-2">Department: {product.department}</span>
				<span className="mr-2">Color: {product.color}</span>
				<h4>${product.price}</h4>
			</div>
			<button
				className={`${style.link} 
                btn btn-primary  ${ordered() ? "disabled" : ""}`}
				onClick={() => {
					setorder(product, ordered());
				}}
			>
				Add to basket
			</button>
		</div>
	);
};

const mapToState = (state) => {
	return {
		orders: state.orders,
	};
};

const mapDispatchProps = (dispatch) => {
	return {
		setorder: (order, ordered) => dispatch(addOrder(order, ordered)),
	};
};

export default connect(mapToState, mapDispatchProps)(ListProducts);
