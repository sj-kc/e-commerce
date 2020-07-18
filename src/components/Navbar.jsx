import React from "react";
import { connect } from "react-redux";
import { setText } from './../store/actions/filters';


const Navbar = ({ text, filters }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search product name"
                value={filters.text}
                name="text"
                onChange={({ target }) => {
                    text(target.value);
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
    };
};

export default connect(mapToProps, mapDispatch)(Navbar);