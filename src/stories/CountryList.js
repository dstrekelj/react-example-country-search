import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import CountryList from 'components/CountryList'

const fixtures = {
    withOneItem: {
        items: [ { name: 'Croatia', capital: 'Zagreb' } ],
    },
    withTenItems: {
        items: Array(10).fill(0).map(e => ({ name: 'Croatia', capital: 'Zagreb' })),
    },
}

storiesOf('CountryList', module)
    .add('by default', () => (
        <CountryList />
    ))
    .add('with no items', () => (
        <CountryList items={[]} />
    ))
    .add('with one item', () => (
        <CountryList {...fixtures.withOneItem} />
    ))
    .add('with ten items', () => (
        <CountryList {...fixtures.withTenItems} />
    ))
