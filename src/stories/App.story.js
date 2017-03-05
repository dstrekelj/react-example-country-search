import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import App from 'components/App'
import { ENUM_REQUEST_STATE } from 'utils/Resources'

storiesOf('App', module)
    .add('by default', () => (
        <App />
    ))
    .add('with countries request pending', () => (
        <App
            model={{
                countries: [],
                requestCountriesState: ENUM_REQUEST_STATE.PENDING,
            }}
            actions={{
                onRequestCountries: action('onRequestCountries'),
                onUpdateSearchQuery: action('onUpdateSearchQuery'),
            }}
        />
    ))
    .add('with countries request success (no data)', () => (
        <App
            model={{
                countries: [],
                requestCountriesState: ENUM_REQUEST_STATE.SUCCESS,
            }}
            actions={{
                onRequestCountries: action('onRequestCountries'),
                onUpdateSearchQuery: action('onUpdateSearchQuery'),
            }}
        />
    ))
    .add('with countries request success (with data)', () => (
        <App
            model={{
                countries: Array(20).fill(0).map(e => ({ name: 'Croatia', capital: 'Zagreb', })),
                requestCountriesState: ENUM_REQUEST_STATE.SUCCESS,
            }}
            actions={{
                onRequestCountries: action('onRequestCountries'),
                onUpdateSearchQuery: action('onUpdateSearchQuery'),
            }}
        />
    ))
    .add('with countries request failure', () => (
        <App
            model={{
                countries: [],
                requestCountriesState: ENUM_REQUEST_STATE.FAILURE,
            }}
            actions={{
                onRequestCountries: action('onRequestCountries'),
                onUpdateSearchQuery: action('onUpdateSearchQuery'),
            }}
        />
    ))
