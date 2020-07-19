import React from 'react';
import { connect } from 'react-redux';

const Orders = (props) => {
    console.log(props)
    return (
        <h1>Orders</h1>
    );
}


const mapToState = (state) => {

    return {

    }
}

export default connect(mapToState)(Orders);