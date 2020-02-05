import { useEffect, useState } from 'react';
import axios from 'axios';

import { ResponseType, ErrorType, ReturnUseFetchType, isLoadingType } from './types';

export default (url: string): ReturnUseFetchType => {
    const [isLoading, setIsLoading] = useState<isLoadingType>(false);
    const [response, setResponse] = useState<ResponseType>(null);
    const [error, setError] = useState<ErrorType>(null);
    const [fetchOptions, setFetchOptions] = useState({});

    const doFetch = (config = {}) => {
        setFetchOptions(config);
        setIsLoading(true);
    };

    useEffect(() => {
        if (!isLoading) {
            return;
        }

        axios(url, fetchOptions)
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
    }, [isLoading]);

    return [{ isLoading, response, error }, doFetch];
};
