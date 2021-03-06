import minstrel_api from '../apis/minstrel_api';
import mapquest_api from '../apis/mapquest';
import history from '../history';

const mapquest_key = "DvALSLnxRSCga8sRwo30Fpep08reiHed";

export const registerAdmirer = formValues => async dispatch => {
    try {
        const resp = await minstrel_api.post('/register/admirer', formValues);
        dispatch({ type: "CREATE_ADMIRER", payload: resp.data });
        history.push('/');
    }
    catch (error) {
        if (error.response.data.status === "error") {
            if (error.response.data.username) {
                dispatch({ type: 'ERROR_USERNAME', payload: error.response.data.username });
            }
            if (error.response.data.email) {
                dispatch({ type: 'ERROR_EMAIL', payload: error.response.data.email });
            }
            if (error.response.data.categories) {
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
    catch (error) {
        if (error.response.data.status === "error") {
            if (error.response.data.username) {
                dispatch({ type: 'ERROR_USERNAME', payload: error.response.data.username });
            }
            if (error.response.data.email) {
                dispatch({ type: 'ERROR_EMAIL', payload: error.response.data.email });
            }
            if (error.response.data.categories) {
                dispatch({ type: 'ERROR_CATEGORIES', payload: error.response.data.categories });
            }
        }
    }

};

export const createPerformance = (formValues, jwt) => async dispatch => {
    try {
        const resp = await minstrel_api.post(`/performance/${formValues.title}`,
            formValues, {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        });
        dispatch({ type: "CREATE_PERFORMANCE", payload: resp.data });
        history.push('/');
    }
    catch (error) {
        if (error.response.data.status === "error") {
            if (error.response.data.username) {
                dispatch({ type: 'ERROR_USERNAME', payload: error.response.data.username });
            }
            if (error.response.data.email) {
                dispatch({ type: 'ERROR_EMAIL', payload: error.response.data.email });
            }
            if (error.response.data.categories) {
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
        if (error.response.data.status === "error") {
            dispatch({ type: 'ERROR_LOGIN', payload: error.response.data['message'] })
        }
    }
};

export const logOut = jwt => async dispatch => {
    await minstrel_api.delete('/logout', {
        headers: {
            Authorization: 'Bearer ' + jwt
        }
    });
    dispatch({ type: "LOG_OUT" });
    history.push('/');
}

export const geocode = address => async dispatch => {
    const resp = await mapquest_api.get(`geocoding/v1/address?key=${mapquest_key}&location=${address}`)

    dispatch({
        type: 'GEOCODE',
        payload: resp.results[0].locations[0]
    });
};

export const reverseGeocode = latLong => async dispatch => {
    const resp = await mapquest_api.get(`https://open.mapquestapi.com/geocoding/v1/reverse?key=${mapquest_key}&location=${latLong}`)

    dispatch({
        type: 'REVERSE_GEOCODE',
        payload: resp.data.results[0].locations[0]
    });
}

export const getPerformers = (filterValues) => async dispatch => {
    const resp = await minstrel_api.get('/performer')
    dispatch({
        type: 'GET_PERFORMERS',
        payload: resp.data.performers
    });
    if (filterValues) {
        dispatch(filterPerformers(filterValues));
    }
}
export const getAdmirers = () => async dispatch => {
    const resp = await minstrel_api.get('/admirer')
    dispatch({
        type: 'GET_ADMIRERS',
        payload: resp.data.admirers
    });
}
export const getPerformances = () => async dispatch => {
    const resp = await minstrel_api.get('/performance')
    dispatch({
        type: 'GET_PERFORMERS',
        payload: resp.data.performances
    });
}

export const getOffers = () => async dispatch => {
    const resp = await minstrel_api.get('/offer')
    dispatch({
        type: 'GET_OFFERS',
        payload: resp.data.offers
    });
}

export const filterPerformers = (filterValues) => {
    if (filterValues[0] === "categories") {
        return {
            type: 'FILTER_PERFORMERS_CATEGORIES',
            payload: filterValues[1]
        }
    }
    else {
        return {
            type: 'FILTER_PERFORMERS_LOCATION',
            payload: filterValues[1]
        }
    }
}

export const adminGetInformation = (jwt) => async dispatch => {
    const resp = await minstrel_api.get(`/admin`,
         {
        headers: {
            Authorization: 'Bearer ' + jwt
        }
    });
    dispatch({ type: 'ADMIN_GET_INFORMATION', payload: resp.data });
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

export const changeLanguage = () => {
    return {
        type: 'CHANGE_LANGUAGE'
    };
};


