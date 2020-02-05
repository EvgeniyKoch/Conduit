export interface IUserLoginOrRegister {
    method: string;
    data: {
        user: {
            email: string;
            password: string;
            username?: string;
        };
    };
    url: string;
}

export interface IErrorUserLoginOrPassword {
    errors: {
        'email or password': [string];
    };
}

export interface IResponseObj {
    isLoading: isLoadingType;
    response: ResponseType;
    error: ErrorType;
    username?: string;
}

export type DoFetchType = (config: IConfig) => void;
export type isLoadingType = boolean;
export type ResponseType = any;
export type IConfig = IUserLoginOrRegister | {};
export type ErrorType = IErrorUserLoginOrPassword | null;
export type ReturnUseFetchType = [IResponseObj, DoFetchType];
