import {
    SITE_LIST_REQUEST,
    SITE_LIST_SUCCESS,
    SITE_LIST_FAIL,
    SITE_DETAILS_REQUEST,
    SITE_DETAILS_SUCCESS,
    SITE_DETAILS_FAIL,
} from "../constants/siteConstant"

export const siteListReducer = (state = { sites: [] }, action) => {
    switch (action.type) {
        case SITE_LIST_REQUEST:
            return { loading: true, sites: [] }
        case SITE_LIST_SUCCESS:
            return { loading: false, sites: action.payload }
        case SITE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const siteDetailsReducer = (state = { site: { fireDamper: [] } }, action) => {
    switch (action.type) {
        case SITE_DETAILS_REQUEST:
            return { loading: true, ...state }
        case SITE_DETAILS_SUCCESS:
            return { loading: false, site: action.payload }
        case SITE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}