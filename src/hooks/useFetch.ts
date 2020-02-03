import { useEffect, useState } from 'react';
import axios from 'axios';

export default (url: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
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
                console.warn(e, 'error');
                setIsLoading(false);
                setError(e.response.data);
            });
    }, [isLoading]);

    return [{ isLoading, response, error }, doFetch];
};
