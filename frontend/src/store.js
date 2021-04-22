import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { siteListReducer, siteDetailsReducer } from "./reducers/siteReducers"
import { userLoginReducer } from "./reducers/userReducer"

const reducer = combineReducers({
    siteList: siteListReducer,
    siteDetails: siteDetailsReducer,
    userLogin: userLoginReducer
})

/**
 * Data from local storage
 *  - User Info
 *  
 */
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null
const intialState = { userLogin: { userInfo: userInfoFromStorage } }

const middleware = [thunk]
const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;