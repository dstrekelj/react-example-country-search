import React, { PropTypes } from 'react'

const propTypes = {
    capital: PropTypes.string,
    name: PropTypes.string,
}

const defaultProps = {
    capital: 'Unknown',
    name: 'Unknown',
}

function CountryItem({ capital, name }) {
    return (
        <article className="CountryItem">
            <p>{name}</p>
        </article>
    )
}

CountryItem.propTypes = propTypes
CountryItem.defaultProps = defaultProps

export default CountryItem
