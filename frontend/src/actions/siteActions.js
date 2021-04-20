import {
    SITE_LIST_REQUEST,
    SITE_LIST_SUCCESS,
    SITE_LIST_FAIL,
    SITE_DETAILS_REQUEST,
    SITE_DETAILS_SUCCESS,
    SITE_DETAILS_FAIL
} from "../constants/siteConstant"

import axios from "axios"
// Redux thunk for asynchronous operations
export const listSites = () => async (dispatch) => {
    try {
        dispatch({
            type: SITE_LIST_REQUEST
        })
        const { data } = await axios.get("/api/sites")
        dispatch({
            type: SITE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SITE_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// Redux thunk for asynchronous operations
export const listSiteDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: SITE_DETAILS_REQUEST
        })
        const { data } = await axios.get(`/api/sites/${id}`)
        dispatch({
            type: SITE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SITE_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
