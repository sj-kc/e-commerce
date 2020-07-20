import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome, FaStore } from "react-icons/fa";
import { connect } from "react-redux";

const NavBar = ({ orders }) => {
	const Home = () => {
		const style = {
			fontSize: "15px",
			marginTop: "10px",
			marginLeft: "2px",
			marginRight: "7px",
			color: "#de0771",
		};

		return (
			<IconContext.Provider value={{ style }}>
				<FaHome />
			</IconContext.Provider>
		);
	};

	const Store = () => {
		const style = {
			fontSize: "15px",
			marginTop: "10px",
			marginLeft: "2px",
			marginRight: "7px",
			color: "#de0771",
		};

		return (
			<IconContext.Provider value={{ style }}>
				<FaStore />
			</IconContext.Provider>
		);
	};

	return (
		<div>
			<Link to="/e-commerce" title="Home">
				{Home()}
			</Link>
			<Link to="/e-commerce/orders/products" title="Your orders">
				{Store()}
				{orders.length >= 1 ? (
					<span className="badge position-absolute">{orders.length}</span>
				) : (
					""
				)}
			</Link>
		</div>
	);
};

const mapToState = (state) => {
	return {
		orders: state.orders,
	};
};

export default connect(mapToState)(NavBar);
