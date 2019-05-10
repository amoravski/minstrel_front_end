export default ( state={}, action ) => {
    switch(action.type) {
        case 'ERROR_LOGIN':
            return {...state, error: action.payload}
        default:
            return state;
    }
}

