import minstrel_api from '../apis/minstrel_api';
import history from '../history';

export const registerAdmirer = formValues => async dispatch => {
    try {
        const resp = await minstrel_api.post('/register/admirer', formValues);
        dispatch({ type: "CREATE_ADMIRER", payload: resp.data });
        history.push('/');
    }
    catch (error)
        {
            if (error.response.data.status === "error"){
                if (error.response.data.username){
                    dispatch({ type: 'ERROR_USERNAME', payload: error.response.data.username });
                }
                if (error.response.data.email){
                    dispatch({ type: 'ERROR_EMAIL', payload: error.response.data.email });
                }
                if (error.response.data.categories){
                    dispatch({ type: 'ERROR_CATEGORIES', payload: error.response.data.categories });
                }
            }
        }
};

export const registerPerformer = formValues => async dispatch => {
    try {
        const resp = await minstrel_api.post('/register/performer', formValues)
        dispatch({ type: "CREATE_PERFORMER", payload: resp.data });
        history.push('/');
    }
    catch (error) 
        {
            if (error.response.data.status === "error"){
                if (error.response.data.username){
                    dispatch({ type: 'ERROR_USERNAME', payload: error.response.data.username });
                }
                if (error.response.data.email){
                    dispatch({ type: 'ERROR_EMAIL', payload: error.response.data.email });
                }
                if (error.response.data.categories){
                    dispatch({ type: 'ERROR_CATEGORIES', payload: error.response.data.categories });
                }
            }
        }
    
};

export const logIn = formValues => async dispatch => {
    try {
        const resp = await minstrel_api.post('/login', formValues);
        dispatch({ type: "LOG_IN", payload: resp.data });
        history.push('/');
    }
    catch (error) {
        if (error.response.data.status === "error"){
            dispatch({type: 'ERROR_LOGIN', payload: error.response.data['message']})
        }
    }
};

export const logOut = jwt => async dispatch => {
    await minstrel_api.post('/logout', jwt);
    dispatch({ type: "LOG_OUT" });
    history.push('/');
}

export const openSidebar = () => {
    return {
        type: 'OPEN_SIDEBAR'
    };
};

export const closeSidebar = () => {
    return {
        type: 'CLOSE_SIDEBAR'
    };
};

export const initSidebar = () => {
    return {
        type: 'INIT_SIDEBAR'
    };
};
