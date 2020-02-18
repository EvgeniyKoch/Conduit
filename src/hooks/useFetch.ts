import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { ErrorType, ReturnUseFetchType, isLoadingType, IConfig } from './types';
import useLocalStorage from './useLocalStorage';

export default (url: string): ReturnUseFetchType => {
    const [isLoading, setIsLoading] = useState<isLoadingType>(false);
    const [response, setResponse] = useState<null>(null);
    const [error, setError] = useState<ErrorType>(null);
    const [fetchOptions, setFetchOptions] = useState({});
    const [token] = useLocalStorage('token');

    const doFetch = useCallback((config: IConfig = {}) => {
        setFetchOptions(config);
        setIsLoading(true);
    }, []);

    useEffect(() => {
        const requestOptions = {
            ...fetchOptions,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : '',
                },
            },
        };

        if (!isLoading) {
            return;
        }

        axios(url, requestOptions)
            .then((res) => {
                console.log(res, 'res');
                setIsLoading(false);
                setResponse(res.data);
            })
            .catch((e) => {
                console.warn(e.response.data, 'error');
                setIsLoading(false);
                setError(e.response.data);
            });
    }, [isLoading, fetchOptions, url, token]);

    return [{ isLoading, response, error }, doFetch];
};
