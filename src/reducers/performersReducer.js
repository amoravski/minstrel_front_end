import _ from 'lodash';

export default ( state=[], action ) => {
    switch (action.type){
        case 'GET_PERFORMERS':
            return action.payload;
        case 'ADMIN_GET_INFORMATION':
            return action.payload.performers;
        case 'FILTER_PERFORMERS_CATEGORIES':
            return _.filter(state, function(performer) {
                return performer.categories
                    .map(function(category) {
                    if (category.includes(action.payload)){
                        return true;
                    }
                    return false;
                    })
                    .reduce(function(prev, curr) {
                        return prev || curr;
                    });
                });
        default:
            return state;
    }
}
