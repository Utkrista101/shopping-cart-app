import { combineReducers } from "redux";

import reducer from "./shopping/reducer";

const rootReducer = combineReducers({
  shop: reducer,
});

export default rootReducer;
