import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import SearchInput from 'components/SearchInput'

storiesOf('SearchInput', module)
    .add('by default', () => (
        <SearchInput />
    ))
