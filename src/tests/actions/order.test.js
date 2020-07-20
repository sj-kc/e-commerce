import {
	addOrder,
	removeOrder,
	addQuantity,
	removeQuantity,
} from "../../store/actions/order";

import products from "../fixtures/products";

test("should create an order", () => {
	const action = addOrder(products[0]);
	expect(action).toEqual({
		type: "ADD_ORDER",
		product: {
			id: "11111",
			color: "white",
			department: "one",
			productName: "product",
			price: "11",
			product: "baby",
			description: "lorem",
		},
	});
});

test("should remove an order", () => {
	const action = removeOrder("11111");
	expect(action).toEqual({
		type: "REMOVE_ORDER",
		id: "11111",
	});
});

test("should add 1", () => {
	const action = addQuantity("11111", 1);
	expect(action).toEqual({
		type: "ADD_QUANTITY",
		id: "11111",
		val: 1,
	});
});

test("should remove 1", () => {
	const action = removeQuantity("11111", 1);
	expect(action).toEqual({
		type: "REMOVE_QUANTITY",
		id: "11111",
		val: 1,
	});
});
