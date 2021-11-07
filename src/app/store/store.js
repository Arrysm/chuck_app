import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import initialStore from "./initialStore";
import thunk from "redux-thunk";

const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));

export default store