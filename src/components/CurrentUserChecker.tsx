import { useContext, useEffect } from 'react';

import { API } from '../api';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import { CurrentUserContext } from '../context/currentUserContext';

const CurrentUserChecker = ({ children }) => {
    const [{ response }, doFetch] = useFetch(API.GET_USER());
    const [, dispatch] = useContext(CurrentUserContext);
    const [token] = useLocalStorage('token');

    useEffect(() => {
        if (!token) {
            dispatch({ type: 'SET_UNAUTHORIZED' });

            return;
        }
        doFetch();
        dispatch({ type: 'LOADING' });
    }, [token, dispatch, doFetch]);

    useEffect(() => {
        if (!response) {
            return;
        }

        dispatch({ type: 'SET_AUTHORIZED', payload: response });
    }, [response, dispatch]);

    return children;
};

export default CurrentUserChecker;
