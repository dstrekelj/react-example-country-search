import React, { PropTypes } from 'react'

import CountryList from 'components/CountryList'
import { ENUM_REQUEST_STATE, requestStateUtil } from 'utils/Resources'

const propTypes = {
    actions: PropTypes.shape({
        handleRequestCountries: PropTypes.func,
    }),
    model: PropTypes.shape({
        countries: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                capital: PropTypes.string,
            }),
        ),
        requestCountriesState: PropTypes.string,
    }),
}

const defaultProps = {
    actions: {
        handleRequestCountries: () => {},
    },
    model: {
        countries: [],
        requestCountriesState: ENUM_REQUEST_STATE.SUCCESS,
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.handleRequestCountries()
    }

    render() {
        const { model } = this.props

        if (requestStateUtil.isFailure(model.requestCountriesState)) {
            <p>An error has occured.</p>
        }

        if (requestStateUtil.isPending(model.requestCountriesState)) {
            <p>Loading...</p>
        }

        return (
            <CountryList items={model.countries} />
        )
    }
}

export default App
