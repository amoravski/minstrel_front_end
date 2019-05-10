import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import registerReducer from './registerReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import sidebarReducer from './sidebarReducer';
import geocodeReducer from './geocodeReducer';
import languageReducer from './languageReducer';
import performersReducer from './performersReducer';
import admirerReducer from './admirerReducer';
import performanceReducer from './performanceReducer';
import offerReducer from './offerReducer.js';

const persistConfigUser = {
    key: 'user',
    storage
}

const persistConfigLanguage = {
    key: 'language',
    storage
}

const persistedUser = persistReducer(persistConfigUser, userReducer);
const persistedLanguage = persistReducer(persistConfigLanguage, languageReducer);

export default combineReducers({
    form: formReducer,
    register: registerReducer,
    user: persistedUser,
    login: loginReducer,
    sidebar: sidebarReducer,
    geocode: geocodeReducer,
    language: persistedLanguage,
    performers: performersReducer,
    admirers: admirerReducer,
    performance: performanceReducer,
    offer: offerReducer
});
