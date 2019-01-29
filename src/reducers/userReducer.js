export default ( state={ signedIn: false }, action ) => {
    switch(action.type) {
        case 'LOG_IN':
            return { jwt: action.payload.access_token, signedIn: true }; 
        case 'LOG_OUT':
            return { signedIn: false };
        default:
            return state;
    }
}
