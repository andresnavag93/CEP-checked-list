/* eslint-disable no-multi-assign */
export const setVisited = (payload) => {
  return { type: "SET_VISITED", payload };
};

export const setNotVisited = (payload) => {
  return { type: "SET_NOT_VISITED", payload };
};

export const setFilterDate = (payload) => {
  return { type: "SET_FILTER_DATE", payload };
};
