import axios from "axios"
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from "../constants/userConstant.js"
// Redux thunk for asynchronous
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        // In the Headers pass in a content type Application/JSON & token for protected routes.
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post("/api/users/login", { email, password, config })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        // Use local storage to store current login user to the browser's local storage.
        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}