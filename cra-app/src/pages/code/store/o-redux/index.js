import applyMiddleware from './applyMiddleware' ;
function createStore(reducer, enhancer) {
    if (enhancer) {
        // 增强dispatch
        return enhancer(createStore)(reducer)
    }

    let currentState;
    let currentListeners = [];

    const subscribe = (listener) => {
        currentListeners.push(listener);
        return () => {
            let index = currentListeners.indexOf(listener);
            currentListeners.splice(index, 1);
        }
    }

    const getState = () => {
        return currentState;
    }

    const dispatch = (action) => {
        currentState = reducer(currentState, action);
        currentListeners.forEach(listener => listener())
    }

    dispatch({type: 'XXXXXX/OOOOO'});

    return {
        getState,
        subscribe,
        dispatch
    }
}
export {createStore, applyMiddleware}