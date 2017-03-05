import React, { PropTypes } from 'react'

import CountryList from 'components/CountryList'
import MessageOverlay from 'components/MessageOverlay'
import SearchInput from 'components/SearchInput'
import { ENUM_REQUEST_STATE, requestStateUtil } from 'utils/Resources'

import 'styles/_all.scss'

const propTypes = {
    actions: PropTypes.shape({
        onRequestCountries: PropTypes.func,
        onUpdateSearchQuery: PropTypes.func,
    }),
    model: PropTypes.shape({
        countries: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                capital: PropTypes.string,
            }),
        ),
        requestCountriesState: PropTypes.string,
        searchQuery: PropTypes.string,
    }),
}

const defaultProps = {
    actions: {
        onRequestCountries: () => {},
        onUpdateSearchQuery: () => {},
    },
    model: {
        countries: [],
        requestCountriesState: ENUM_REQUEST_STATE.SUCCESS,
        searchQuery: '',
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    }
    componentDidMount() {
        this.props.actions.onRequestCountries()
    }

    handleSearchInputChange(value) {
        this.props.actions.onUpdateSearchQuery(value)
    }

    render() {
        const { model } = this.props

        let message = undefined

        if (requestStateUtil.isFailure(model.requestCountriesState)) {
            message = 'An error has occured.'
        } else if (requestStateUtil.isPending(model.requestCountriesState)) {
            message = 'Loading...'
        } else if (model.countries.length === 0) {
            message = 'No data.'
        }

        let countries = model.countries

        if (model.searchQuery !== '') {
            const regex = new RegExp(model.searchQuery, 'gi')
            countries = countries.filter(e => regex.test(e.name))
        }

        return (
            <div className="App__wrapper">
                <h1>Country Search</h1>
                {message !== undefined && <MessageOverlay>{message}</MessageOverlay>}
                <SearchInput
                    onChange={this.handleSearchInputChange}
                />
                <CountryList items={countries} />
            </div>
        )
    }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App
