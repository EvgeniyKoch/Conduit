import { useEffect, useState } from 'react';

export default (key: string, initialValue = '') => {
    const [value, setValue] = useState<string>(() => {
        return localStorage.getItem(key) || initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue] as const;
};
