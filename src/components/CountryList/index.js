import React, { PropTypes } from 'react'

import CountryItem from 'components/CountryItem'

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}

const defaultProps = {
    items: [],
}

function CountryList({ items }) {
    return (
        <section className="CountryList">
            {items.length === 0 && <p>No data.</p>}
            {items.map(e => <CountryItem {...e} />)}
        </section>
    )
}

CountryList.propTypes = propTypes
CountryList.defaultProps = defaultProps

export default CountryList
