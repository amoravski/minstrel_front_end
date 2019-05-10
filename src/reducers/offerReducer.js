export default ( state=[], action ) => {
    switch(action.type) {
        case 'GET_OFFERS':
            return action.payload;
        case 'ADMIN_GET_INFORMATION':
            return action.payload.offers;
        default:
            return state;
    }
}
