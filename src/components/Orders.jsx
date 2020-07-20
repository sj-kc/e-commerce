import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import { FaTrashAlt } from "react-icons/fa";
import {
	addQuantity,
	removeQuantity,
	removeOrder,
} from "../store/actions/order";

import NavBar from "./NavBar";
import style from "./styles/Orders.module.css";

const Orders = (props) => {
	const { orders, add, remove, deleteOrder } = props;

	useEffect(() => {
		orders.map((order) => {
			add(order.id, 1, order.price);
		});
	}, []);

	const getTotal = () => {
		let total = 0;
		orders.map((order) => {
			total += parseInt(order.price) * order.item;
		});

		return total.toFixed(2);
	};

	const Delete = () => {
		const style = {
			color: "#de0771",
		};

		return (
			<IconContext.Provider value={{ style }}>
				<FaTrashAlt />
			</IconContext.Provider>
		);
	};

	return (
		<div className="container">
			<div className="container">
				<NavBar />
				<h1> {orders.length ? "Orders" : "There is any item"} </h1>
				{orders.map((order) => (
					<div className="m-10" key={order.id}>
						<div className="card_body px-0 border-bottom">
							<div>
								<h3 className="inline-block">{order.productName}</h3>
								<button
									className="btn float-right"
									onClick={() => {
										deleteOrder(order.id);
									}}
								>
									{Delete()}
								</button>
							</div>
							<span className={`${style.order__item} mr-2`}>
								{order.department}
							</span>
							<span className={`${style.order__item} mr-2`}>{order.color}</span>
							<button
								className="btn"
								onClick={() => remove(order.id, --order.item)}
								disabled={order.item <= 1}
							>
								-
							</button>
							<span> {order.item}</span>
							<button
								className="btn"
								onClick={() => add(order.id, ++order.item)}
							>
								+
							</button>
							<span className="mr-2 float-right text-bold">
								${order.price * order.item}
							</span>
						</div>
					</div>
				))}
				<div className="float-right m-10">
					<h3>Total ${getTotal()}</h3>
				</div>
			</div>
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
		add: (id, val) => dispatch(addQuantity(id, val)),
		remove: (id, val) => dispatch(removeQuantity(id, val)),
		deleteOrder: (id) => dispatch(removeOrder(id)),
	};
};

export default connect(mapToState, mapDispatchProps)(Orders);
