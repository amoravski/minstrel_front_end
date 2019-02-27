export default ( state={}, action ) => {
    switch (action.type) {
        case 'GEOCODE':
            return {...state, latlng: action.payload}
        case 'REVERSE_GEOCODE':
            return {...state, location: action.payload}
        default:
            return {};
    }
}
