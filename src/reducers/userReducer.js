import jwt_decode from 'jwt-decode';

export default ( state={ signedIn: false }, action ) => {
    switch(action.type) {
        case 'LOG_IN':
            const decodedJwt = jwt_decode(action.payload.access_token);
            return { jwt: action.payload.access_token, signedIn: true, name: decodedJwt.identity, type: action.payload.type  }; 
        case 'LOG_OUT':
            return { signedIn: false };
        default:
            return state;
    }
}
