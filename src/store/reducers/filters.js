const defaultState = {
  text: "",
  filter: {
    department: "",
    color: "",
  },
  currentPage: 1,
  productsPerPage: 10,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };

    case "SET_DEPARMENT":
      return {
        ...state,
        filter: {
          ...state.filter,
          department: action.department,
        },
      };

    case "SET_COLOR":
      return {
        ...state,
        filter: {
          ...state.filter,
          color: action.color,
        },
      };

    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.page,
      };

    default:
      return state;
  }
};
