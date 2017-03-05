import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ACTION_CREATORS as API_ACTIONS } from 'actions/Api'
import { ACTION_CREATORS as APP_ACTIONS } from 'actions/App'
import View from 'components/App'
import Api from 'utils/Api'

const handleRequestCountries = () =>
    (dispatch, getState) => {
        dispatch(API_ACTIONS.getAllCountriesRequest())

        return Promise.resolve(Api.getAllCountries())
            .then(res => {
                console.log(res)
                dispatch(API_ACTIONS.getAllCountriesSuccess(res))
            })
            .catch(err => {
                console.error(err)
                dispatch(API_ACTIONS.getAllCountriesFailure(err))
            })
    }

const handleUpdateSearchQuery = (searchQuery) =>
    (dispatch, getState) => {
        dispatch(APP_ACTIONS.updateSearchQuery(searchQuery))
    }

const mapStateToProps = state => ({
    model: {
        ...state
    },
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            onRequestCountries: handleRequestCountries,
            onUpdateSearchQuery: handleUpdateSearchQuery,
        },
        dispatch
    ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(View)
