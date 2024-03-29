import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
