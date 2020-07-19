import React from "react";
import { connect } from "react-redux";
import { setText, setDepartment, setColor } from '../store/actions/filters';
import Filters from "./Filters";
import style from "./styles/SideBar.module.css"

const SideBar = ({ text, deparment, color, filters }) => {

    return (
        <div className={style.sidebar}>
            <h1 className="text-center" onClick={() => {
                deparment();
                color();
            }}>Commercesify</h1>
            <input
                className={`${style.input}`}
                type="text"
                placeholder="Product name"
                value={filters.text}
                name="text"
                onChange={({ target }) => {
                    text(target.value);
                    deparment()
                    color()
                }}
            />
            <Filters />
        </div>
    );
};

const mapToProps = (state) => {
    return {
        filters: state.filters,
    };
};

const mapDispatch = (dispatch) => {
    return {
        text: (text) => dispatch(setText(text)),
        deparment: () => dispatch(setDepartment()),
        color: () => dispatch(setColor()),
    };
};

export default connect(mapToProps, mapDispatch)(SideBar);