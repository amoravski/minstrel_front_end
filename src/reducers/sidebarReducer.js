export default ( state={ first: true, visible: true  }, action ) => {
    switch (action.type) {
        case 'INIT_SIDEBAR':
            return {...state, first: true, visible: true}
        case 'OPEN_SIDEBAR':
            return {...state, first: false, visible: true}
        case 'CLOSE_SIDEBAR':
            return {...state, first: false, visible: false}
        default:
            return state;
    }
};
