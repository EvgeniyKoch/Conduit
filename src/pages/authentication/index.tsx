import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import API from '../../api';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CurrentUserContext } from '../../context/currentUserContext';
import BackendErrorMessages from '../../components/BackendErrorMessages';

const Authentication = (props) => {
    const isLogin = props.match.path === '/login';
    const pageTitle = isLogin ? 'Sing In' : 'Sing Up';
    const descriptionLink = isLogin ? '/register' : '/login';
    const descriptionText = isLogin ? 'Need' : 'Have' ;

    const [username, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState<boolean>(false);

    const apiUrl = isLogin ? API.USER_LOGIN() : API.USER_REGISTER();
    const [{ isLoading, response, error  }, doFetch] = useFetch(apiUrl);
    const [, setToken] = useLocalStorage('token');
    const [, setCurrentUserState] = useContext<any>(CurrentUserContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = isLogin ? { email, password } : { email, password, username };
        doFetch({
            method: 'post',
            data: { user },
        });
    };

    const renderUserNameField = () => (
        <fieldset className="form-group">
            <input
                onChange={e => setUserName(e.target.value)}
                type="text"
                name="username"
                className="form-control form-control-lg"
                placeholder="Name"
                value={username}
            />
        </fieldset>
    );

    useEffect(() => {
        if (!response) {
            return;
        }

        setToken(response.user.token);
        setIsSuccessfulSubmit(true);
        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user,
        }));
    }, [response, setToken, setCurrentUserState]);

    if (isSuccessfulSubmit) {
        return <Redirect to="/" />;
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{pageTitle}</h1>
                        <p className="text-xs-center">
                            <Link to={descriptionLink}>{descriptionText} an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            {error && <BackendErrorMessages backendErrors={error.errors} />}
                            <fieldset>
                                {!isLogin && renderUserNameField()}
                                <fieldset className="form-group">
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        name="password"
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={password}
                                    />
                                </fieldset>
                                <button disabled={isLoading} type="submit" className="btn btn-lg btn-primary pull-xs-right">
                                    {pageTitle}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
