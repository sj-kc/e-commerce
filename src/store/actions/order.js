export const addOrder = (product = {}, value, ordered) => {
	return {
		type: "ADD_ORDER",
		product: {
			...product,
			value,
		},
	};
};

export const removeOrder = (id) => {
	return {
		type: "REMOVE_ORDER",
		id,
	};
};

export const addQuantity = (id, val = 1) => {
	return {
		type: "ADD_QUANTITY",
		id,
		val,
	};
};

export const removeQuantity = (id, val = 1) => {
	return {
		type: "REMOVE_QUANTITY",
		id,
		val,
	};
};
