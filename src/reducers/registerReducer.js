export default ( state= {}, action ) => {
    switch (action.type) {
        case 'CREATE_PERFORMER':
            return state;
        case 'CREATE_ADMIRER':
            return state;
        default:
            return state;
    }
}
