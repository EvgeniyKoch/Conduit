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
    currentUser: null | IUser;
}
