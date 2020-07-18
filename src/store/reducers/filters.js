const defaultState = {
  text: "",
  filter: {
    department: "",
    color: "",
  },
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

    default:
      return state;
  }
};
