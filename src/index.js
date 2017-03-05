import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from 'containers/App'
import appReducer from 'reducers/App'

const store = createStore(
    appReducer,
    applyMiddleware(thunk)
)

const container = document.createElement('div')
document.body.appendChild(container)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
)
