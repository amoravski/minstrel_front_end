export default ( state=[], action ) => {
    switch(action.type) {
        case 'GET_ADMIRERS':
            return action.payload;
        case 'ADMIN_GET_INFORMATION':
            return action.payload.admirers;
        default:
            return state;
    }
}
