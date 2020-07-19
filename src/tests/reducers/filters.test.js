import filtersReducer from "../../store/reducers/filters";

const defaultState = {
  text: "",
  filter: {
    department: "",
    color: "",
  },
  currentPage: 1,
  productsPerPage: 10,
};

test("Should set up default state", () => {
  const state = filtersReducer(defaultState, { type: "@@INIT" });
  expect(state).toEqual(defaultState);
});
