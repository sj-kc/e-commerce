import productsReducer from "../../../store/reducers/products";

test("Should set up default state", () => {
  const state = productsReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});
