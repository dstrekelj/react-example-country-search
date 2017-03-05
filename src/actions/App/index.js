export const ACTION_TYPES = {
    UPDATE_SEARCH_QUERY: 'APP_UPDATE_SEARCH_QUERY',
}

export const ACTION_CREATORS = {
    updateSearchQuery: (searchQuery) => ({
        type: ACTION_TYPES.UPDATE_SEARCH_QUERY,
        payload: {
            searchQuery,
        },
    }),
}
