export default function logger({getState}) {
    return next => action => {
        console.log('prev state', getState())
        console.log('action', action)
        let returnValue = next(action);
        console.log('next state', getState())
        return returnValue
    } 
}