import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import CountryItem from 'components/CountryItem'

const fixtures = {
    withData: { name: 'Croatia', capital: 'Zagreb' }
}

storiesOf('CountryItem', module)
    .add('by default', () => (
        <CountryItem />
    ))
    .add('with data', () => (
        <CountryItem {...fixtures.withData} />
    ))
