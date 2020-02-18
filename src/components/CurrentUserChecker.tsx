import { useContext, useEffect } from 'react';

import API from '../api';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import { CurrentUserContext } from '../context/currentUserContext';

const CurrentUserChecker = ({ children }) => {
    const [{ response }, doFetch] = useFetch(API.GET_USER());
    const [, setCurrentUserState] = useContext<any>(CurrentUserContext);
    const [token] = useLocalStorage('token');

    useEffect(() => {
        if (!token) {
            setCurrentUserState(state => ({
                ...state,
                isLoggedIn: false,
            }));

            return;
        }

        doFetch();
        setCurrentUserState(state => ({
            ...state,
            isLoading: true,
        }));
    }, [token, setCurrentUserState, doFetch]);

    useEffect(() => {
        if (!response) {
            return;
        }
        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user,
        }));
    }, [response, setCurrentUserState]);

    return children;
};

export default CurrentUserChecker;
