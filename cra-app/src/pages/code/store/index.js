// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import promise from 'redux-promise';
import { combineReducers } from 'redux';
import {createStore, applyMiddleware} from './o-redux';
import thunk from './o-redux/thunk';
import logger from './o-redux/logger';
import promise from './o-redux/promise';

export const counterReducer = (state = 0, {type, playload = 1}) => {
    switch (type) {
        case 'ADD':
            return state + playload
        case 'MINUS':
            return state - playload
        default:
            return state
    }
}

const store = createStore(combineReducers({counterReducer}), applyMiddleware(thunk, promise, logger))

export default store