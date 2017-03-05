import React, { PropTypes } from 'react'

const propTypes = {
    onChange: PropTypes.func,
}

const defaultProps = {
    onChange: () => {},
}

const handleOnChange = handler => event => handler(event.value)

function SearchInput(props) {
    return (
        <div className="SearchInput">
            <input
                {...props}
                onChange={handleOnChange(props.onChange)}
                type="text"
            />
        </div>
    )
}

SearchInput.propTypes = propTypes
SearchInput.defaultProps = defaultProps

export default SearchInput
