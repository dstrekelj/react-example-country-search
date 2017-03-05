export const ACTION_TYPES = {
    GET_ALL_COUNTRIES_FAILURE: 'API_GET_ALL_COUNTRIES_FAILURE',
    GET_ALL_COUNTRIES_REQUEST: 'API_GET_ALL_COUNTRIES_REQUEST',
    GET_ALL_COUNTRIES_SUCCESS: 'API_GET_ALL_COUNTRIES_SUCCESS',
}

export const ACTION_CREATORS = {
    getAllCountriesFailure: (error) => ({
        type: ACTION_TYPES.GET_ALL_COUNTRIES_FAILURE,
        payload: {
            error,
        },
    }),
    getAllCountriesRequest: () => ({
        type: ACTION_TYPES.GET_ALL_COUNTRIES_REQUEST,
    }),
    getAllCountriesSuccess: (response) => ({
        type: ACTION_TYPES.GET_ALL_COUNTRIES_SUCCESS,
        payload: {
            response,
        },
    })
}
