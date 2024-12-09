import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: true,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

};

export { reducer };
