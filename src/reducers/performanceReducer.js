export default ( state=[], action ) => {
    switch(action.type) {
        case 'CREATE_PERFORMANCE':
            return state;
        case 'GET_PERFORMERS':
            return action.payload
        case 'ADMIN_GET_INFORMATION':
            return action.payload.performances;
        default:
            return state;
    }
}
