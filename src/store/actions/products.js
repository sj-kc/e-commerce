import getProducts from "../../http";

export const setProducts = (products = []) => {
	return {
		type: "SET_PRODUCTS",
		products,
	};
};

export const fetchProducts = () => {
	return (dispatch) => {
		const products = getProducts();
		return dispatch(setProducts(products));
	};
};
