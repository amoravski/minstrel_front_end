import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import registerReducer from './registerReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import sidebarReducer from './sidebarReducer';

const persistConfig = {
    key: 'user',
    storage
}

const persistedUser = persistReducer(persistConfig, userReducer)

export default combineReducers({
    form: formReducer,
    register: registerReducer,
    user: persistedUser,
    login: loginReducer,
    sidebar: sidebarReducer
});
