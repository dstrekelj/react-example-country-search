export const ACTION_TYPES = {
    API_GET_ALL_COUNTRIES_FAILURE: 'API_GET_ALL_COUNTRIES_FAILURE',
    API_GET_ALL_COUNTRIES_REQUEST: 'API_GET_ALL_COUNTRIES_REQUEST',
    API_GET_ALL_COUNTRIES_SUCCESS: 'API_GET_ALL_COUNTRIES_SUCCESS',
}

export const ACTION_CREATORS = {
    getAllCountriesFailure: () => ({
        type: ACTION_TYPES.API_GET_ALL_COUNTRIES_FAILURE,
    }),
    getAllCountriesRequest: () => ({
        type: ACTION_TYPES.API_GET_ALL_COUNTRIES_REQUEST,
    }),
    getAllCountriesSuccess: (data) => ({
        type: ACTION_TYPES.API_GET_ALL_COUNTRIES_SUCCESS,
        payload: {
            data,
        },
    })
}
