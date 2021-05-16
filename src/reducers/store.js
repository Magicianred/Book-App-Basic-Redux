import BookReducer from "./bookReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  book: BookReducer
});

export default rootReducer;
