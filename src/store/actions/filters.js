export const setText = (text = "") => {
  return {
    type: "SET_TEXT",
    text,
  };
};

export const setDepartment = (department = "") => {
  return {
    type: "SET_DEPARMENT",
    department,
  };
};

export const setColor = (color = "") => {
  return {
    type: "SET_COLOR",
    color,
  };
};

export const setPage = (page = 1) => {
  return {
    type: "SET_PAGE",
    page,
  };
};
