export default ( state = { current: 'en'}, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
                if (state.current === 'en') {
                    return {...state, current: 'bg'};
                }
                return {...state, current: 'en'};
        default:
            return state;
    }
}
