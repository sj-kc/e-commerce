import ordersReducer from "../../store/reducers/orders";

test("Should set up default state", () => {
	const state = ordersReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual([]);
});
