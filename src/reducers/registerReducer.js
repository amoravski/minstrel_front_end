export default ( state={}, action ) => {
    switch (action.type) {
        case 'RESET_ERROR':
            return {};
        case 'ERROR_USERNAME':
            return {...state, username: action.payload};
        case 'ERROR_EMAIL':
            return {...state, email: action.payload};
        case 'ERROR_CATEGORIES':
            return {...state, categories: action.payload};
        default:
            return state;
    }
}
