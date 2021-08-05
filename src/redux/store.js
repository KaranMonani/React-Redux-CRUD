import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import reduxThunk from 'redux-thunk'
import rootReducers from './rootReducers'


const middlewares = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(
    rootReducers, applyMiddleware(...middlewares)
)

export default store;