import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGuitar, FaTint } from "react-icons/fa";
import { setDepartment, setPage } from "../store/actions/filters";
import { setColor } from "./../store/actions/filters";
import style from "./styles/Filters.module.css";

const Filters = ({ products, deparment, color, setCurrentPage }) => {
	const getValues = () => {
		const departments = {};
		const colors = {};

		products.map((product) => {
			departments[product.department] = ++departments[product.department] || 1;
			colors[product.color] = ++colors[product.color] || 1;
		});

		return {
			departments,
			colors,
		};
	};

	const collectItems = (arg) => {
		let values = [];
		for (let deparment in arg) {
			values.push({ deparment, items: arg[deparment] });
		}
		return values;
	};

	const getDepartments = () => {
		const { departments } = getValues();
		return collectItems(departments);
	};

	const getColors = () => {
		const { colors } = getValues();
		return collectItems(colors);
	};

	const Guitar = () => {
		const style = {
			fontSize: "15px",
			marginTop: "10px",
			marginLeft: "2px",
			marginRight: "7px",
			color: "#de0771",
		};

		return (
			<IconContext.Provider value={{ style }}>
				<FaGuitar />
			</IconContext.Provider>
		);
	};

	const Color = () => {
		const style = {
			fontSize: "15px",
			marginTop: "10px",
			marginLeft: "2px",
			marginRight: "7px",
			color: "#de0771",
		};

		return (
			<IconContext.Provider value={{ style }}>
				<FaTint />
			</IconContext.Provider>
		);
	};

	return (
		<div>
			<div>
				<h6 className="mb-10 ml-10">{Guitar()} Department </h6>
			</div>
			<ul className={style.sidebar}>
				{getDepartments().map((val) => {
					return (
						<li className={style.sidebar__links} key={val.deparment}>
							<Link
								to="/"
								className={style.sidebar__links__link}
								onClick={() => {
									deparment(val.deparment);
									color();
									setCurrentPage();
								}}
							>
								{" "}
								{val.deparment}{" "}
							</Link>
							<span className={`badge`}>{val.items}</span>
						</li>
					);
				})}
			</ul>
			<div>
				<h6 className="mb-10 ml-10"> {Color()} Color</h6>
			</div>
			<ul className={style.sidebar}>
				{getColors().map((val) => {
					return (
						<li className={style.sidebar__links} key={val.deparment}>
							<Link
								to="/"
								className={style.sidebar__links__link}
								onClick={() => {
									color(val.deparment);
									deparment();
									setCurrentPage();
								}}
							>
								{" "}
								{val.deparment}{" "}
							</Link>
							<span className={`badge`}>{val.items}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const mapToProps = (state) => {
	return {
		products: state.products[0],
	};
};

const mapDispatch = (dispatch) => {
	return {
		deparment: (department) => dispatch(setDepartment(department)),
		color: (department) => dispatch(setColor(department)),
		setCurrentPage: () => dispatch(setPage()),
	};
};

export default connect(mapToProps, mapDispatch)(Filters);
