import { useEffect, useState } from 'react';

export default (key, initialValue = '') => {
    const [value, setValue] = useState<string>(() => {
        return localStorage.getItem(key) || initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
};
