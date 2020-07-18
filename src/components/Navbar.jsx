import React from "react";
import { connect } from "react-redux";
import { setText, setDepartment, setColor } from './../store/actions/filters';
import Filters from "./Filters";

const Navbar = ({ text, deparment, color, filters }) => {
    return (
        <div>
            <Filters />
            <input
                type="text"
                placeholder="Search product name"
                value={filters.text}
                name="text"
                onChange={({ target }) => {
                    text(target.value);
                    deparment()
                    color()
                }}
            />
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

export default connect(mapToProps, mapDispatch)(Navbar);