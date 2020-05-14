import React, { createContext, Dispatch, Reducer, useReducer } from 'react';
import { IState, IUser } from './types';

// interface IProps {
//     children: React.ReactNode;
// }

const initialState: IState = {
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
};

interface IAction {
    type: string;
    payload: {
        user: IUser;
    };
}

const reducer: Reducer<IState, IAction> = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, isLoading: true };
        case 'SET_AUTHORIZED':
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                currentUser: action.payload.user,
            };
        case 'SET_UNAUTHORIZED':
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

// type ContextType = [IState, IAction];

// interface IContextProps {
//     state: IState;
//     dispatch({ type }: {type: string}): void;
// }

export const CurrentUserContext = createContext([]) ;

export const CurrentUserProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return (
        <CurrentUserContext.Provider value={value}> // TODO
            {children}
        </CurrentUserContext.Provider>
    );
};
