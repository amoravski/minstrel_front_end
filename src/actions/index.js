import minstrel_api from '../apis/minstrel_api';
import history from '../history';

export const registerAdmirer = formValues => async dispatch => {
    const resp = await minstrel_api.post('/register/admirer', formValues);

    dispatch({ type: "CREATE_ADMIRER", payload: resp.data });
    history.push('/');
};

export const registerPerformer = formValues => async dispatch => {
    const resp = await minstrel_api.post('/register/performer', formValues);

    dispatch({ type: "CREATE_PERFORMER", payload: resp.data });
    history.push('/');
};

export const logIn = formValues => async dispatch => {
    const resp = await minstrel_api.post('/login', formValues);

    dispatch({ type: "LOG_IN", payload: resp.data });
    history.push('/');
};
