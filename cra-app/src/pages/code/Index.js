import { useEffect, useReducer } from 'react';
import store from './store';
export default function CodePage() {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            forceUpdate();
        });
        return () => {
            unsubscribe();
        } 
    }, []);

    const add = () => {
        store.dispatch({type: 'ADD'})
    }

    const addAync = () => {
        store.dispatch((dispatch) => {
            setTimeout(() => {
                dispatch({type: 'ADD'});
            }, 1000)
        })
    }

    const addPromise = () => {
        store.dispatch(
            Promise.resolve({type: 'ADD'})
        )
    }

    const minus = () => {
        store.dispatch({type: 'MINUS'})
    }
    return(
        <div>
            <p>源码学习</p>
            <hr />
            <div className="border">
                <p>Redux</p>
                <div>
                    计算器的和: {store.getState().counterReducer}
                    <button className="margin20" onClick={add}>add</button>
                    <button className="margin20" onClick={addAync}>ayncAdd +</button>
                    <button className="margin20" onClick={addPromise}>promise +</button>
                    <button onClick={minus}>minus</button>
                </div>
            </div>
        </div>
    )
}