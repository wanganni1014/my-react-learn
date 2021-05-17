import compose from './compose' ;
export default function applyMiddleware(...middlewares) {
    return createStore => reducer => {
        const store = createStore(reducer);
        let dispatch = store.dispactch;

        const midApi = {
            getState: store.getState,
            dispatch: action => dispatch(action)
        }
        // 加强dispatch
        const middlewareChain = middlewares.map(middleware => middleware(midApi));
        dispatch = compose(...middlewareChain)(store.dispatch);

        // 返回store并把dispatch增强掉
        return {
            ...store,
            dispatch
        }
    }
}