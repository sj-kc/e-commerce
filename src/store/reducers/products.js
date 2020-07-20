import "../actions/products";

export default (state = [], action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return [...state, action.products];

		default:
			return state;
	}
};
