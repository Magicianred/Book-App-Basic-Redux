import { books } from "../db";

const initialState = {
  books: books,
  cart: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL":
      return state;
    case "ADD_BOOK":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_BOOK":
      return {
        ...state,
        cart: [state.cart.filter((item) => item.id !== action.payload.id)]
      };
    default:
      return state;
  }
};

export default bookReducer;
