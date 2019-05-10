export default ( state={}, action ) => {
    switch(action.type) {
        case 'ADMIN_GET_INFORMATION':
            return action.payload;
        case 'ADMIN_DELETE':
            return state;
        default:
            return state;
    }
}
