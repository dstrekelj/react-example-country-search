import React, { PropTypes } from 'react'

const propTypes = {
    children: PropTypes.node,
}

const defaultProps = {
    children: '',
}

function MessageOverlay({ children }) {
    return (
        <div className="MessageOverlay">
            <div className="MessageOverlay__content">
                {children}
            </div>
        </div>
    )
}

MessageOverlay.propTypes = propTypes
MessageOverlay.defaultProps = defaultProps

export default MessageOverlay
