import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';


export default combineReducers({
    form: formReducer,
    register: registerReducer
});
