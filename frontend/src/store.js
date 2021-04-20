import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { siteListReducer, siteDetailsReducer } from "./reducers/siteReducers"

const reducer = combineReducers({
    siteList: siteListReducer,
    siteDetails: siteDetailsReducer
})
const intialState = {}
const middleware = [thunk]
const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;