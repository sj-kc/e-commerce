import {
  setText,
  setDepartment,
  setColor,
  setPage,
} from "../../../store/actions/filters";

test("should setup text", () => {
  const action = setText("123abc");
  expect(action).toEqual({
    type: "SET_TEXT",
    text: "123abc",
  });
});

test("should setup department", () => {
  const action = setDepartment("baby");
  expect(action).toEqual({
    type: "SET_DEPARMENT",
    department: "baby",
  });
});
test("should setup color", () => {
  const action = setColor("red");
  expect(action).toEqual({
    type: "SET_COLOR",
    color: "red",
  });
});

test("should setup page", () => {
  const action = setPage(2);
  expect(action).toEqual({
    type: "SET_PAGE",
    page: 2,
  });
});
