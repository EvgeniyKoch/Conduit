import React, { createContext, useState } from 'react';
import { IContext, IState } from './types';

interface IProps {
    children: React.ReactNode;
}

const initialContext: IContext = {
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
    setState: (): void => {},
};

export const CurrentUserContext = createContext([{}, (state: IState): void => {}]);

export const CurrentUserProvider = ({ children }: IProps) => {
    const [state, setState] = useState(initialContext);

    return (
        <CurrentUserContext.Provider value={[state, setState]}>
            {children}
        </CurrentUserContext.Provider>
    );
};
