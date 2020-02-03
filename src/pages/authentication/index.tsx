import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../../api';
import useFetch from '../../hooks/useFetch';

const Authentication = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [{ isLoading, response, error }, doFetch] = useFetch(API.USER_LOGIN());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        doFetch({
            method: 'post',
            data: {
                user: { email, password },
            },
        });
    };

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Login</h1>
                        <p className="text-xs-center">
                            <Link to="register">Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
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
                                    Sign In
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
