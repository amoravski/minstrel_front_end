import _ from 'lodash';

export default ( state={latLng: [], location: ''}, action ) => {
    switch (action.type) {
        case 'GEOCODE':
            return {...state, location: action.payload, latLng: _.values(action.payload.latLng)}
        case 'REVERSE_GEOCODE':
            return {...state, location: action.payload, latLng: _.values(action.payload.latLng)}
        default:
            return state;
    }
}
