import { Dispatch, SetStateAction } from 'react';

export interface IUser {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    bio: null;
    image: null;
    token: null | string;
}

export interface IState {
    isLoggedIn: null | boolean;
    isLoading: null | boolean;
    currentUser?: null | IUser;
}

export interface IContext {
    isLoggedIn: null | boolean;
    isLoading: null | boolean;
    currentUser?: null | IUser;
    setState: Dispatch<SetStateAction<IContext>>;
}
