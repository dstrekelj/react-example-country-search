import { ACTION_TYPES as API_ACTIONS } from 'actions/Api'
import { ACTION_TYPES as APP_ACTIONS } from 'actions/App'
import { ENUM_REQUEST_STATE } from 'utils/Resources'

const handlers = {
    [API_ACTIONS.GET_ALL_COUNTRIES_FAILURE]: (state, { payload }) => ({
        ...state,
        requestCountriesState: ENUM_REQUEST_STATE.FAILURE,
    }),
    [API_ACTIONS.GET_ALL_COUNTRIES_REQUEST]: (state, action) => ({
        ...state,
        requestCountriesState: ENUM_REQUEST_STATE.PENDING,
    }),
    [API_ACTIONS.GET_ALL_COUNTRIES_SUCCESS]: (state, { payload }) => ({
        ...state,
        countries: payload.response.data,
        requestCountriesState: ENUM_REQUEST_STATE.SUCCESS,
    }),
    [APP_ACTIONS.UPDATE_SEARCH_QUERY]: (state, { payload }) => ({
        ...state,
        searchQuery: payload.searchQuery,
    }),
}

const initialState = {
    countries: [],
    requestCountriesState: ENUM_REQUEST_STATE.SUCCESS,
    searchQuery: '',
}

export default (state = initialState, action) => {
    console.log(state, action)
    const handler = handlers[action.type]
    return handler !== undefined ? handler(state, action) : state
}
