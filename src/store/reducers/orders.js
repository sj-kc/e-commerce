export default (state = [], action) => {
	switch (action.type) {
		case "ADD_ORDER":
			return [action.product, ...state];

		case "REMOVE_ORDER":
			return state.filter((pro) => pro.id !== action.id);

		case "ADD_QUANTITY":
			return state.map((pro) => {
				return pro.id === action.id ? { ...pro, item: action.val } : pro;
			});

		case "REMOVE_QUANTITY":
			return state.map((pro) => {
				return pro.id === action.id ? { ...pro, item: action.val } : pro;
			});

		default:
			return state;
	}
};
