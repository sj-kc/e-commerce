import React from 'react';
import { connect } from 'react-redux';
import { setDepartment } from '../store/actions/filters';
import { setColor } from './../store/actions/filters';


const Filters = ({ products, deparment, color }) => {

    const getValues = () => {
        const departments = {}
        const colors = {}

        products.map(product => {
            departments[product.department] = ++departments[product.department] || 1
            colors[product.color] = ++colors[product.color] || 1
        })

        return {
            departments,
            colors,
        }
    }

    const collectItems = (arg) => {
        let values = [];
        for (let deparment in arg) {
            values.push({ deparment, "items": arg[deparment] })
        }
        return values;
    }

    const getDepartments = () => {
        const { departments } = getValues()
        return collectItems(departments)
    }

    const getColors = () => {
        const { colors } = getValues()
        return collectItems(colors)
    }


    return (
        <div>
            {getDepartments().map(val => {
                return (
                    <div key={val.deparment}>
                        <a href="!#" onClick={() => {
                            deparment(val.deparment)
                            color()
                        }}> {val.deparment} </a>
                        <span>{val.items}</span>
                    </div>
                )
            })}

            {getColors().map(val => {
                return (
                    <div key={val.deparment}>
                        <a href="!#" onClick={() => {
                            color(val.deparment)
                            deparment()
                        }}> {val.deparment} </a>
                        <span>{val.items}</span>
                    </div>
                )
            })}
        </div>
    );
}

const mapToProps = (state) => {
    return {
        products: state.products[0],
    };
};

const mapDispatch = (dispatch) => {
    return {
        deparment: (department) => dispatch(setDepartment(department)),
        color: (department) => dispatch(setColor(department)),
    };
};

export default connect(mapToProps, mapDispatch)(Filters);