import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../context/currentUserContext';

const TopBar = () => {
    const [currentUserState] = useContext<any>(CurrentUserContext);
    const renderNavWhenUserIsNotLoggedIn = () => (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login">Sign In</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/register">Sign Up</NavLink>
            </li>
        </>
    );

    const renderNavWhenUserLoggedIn = () => (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/articles/new">
                    <i className="ion-compose" />
                    &nbsp; New Post
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`/profiles/${currentUserState.currentUser.username}`}>
                    <img className="user-pic" src={currentUserState.currentUser.image} alt="" />
                    &nbsp; {currentUserState.currentUser.username}
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to="/" className="navbar navbar-brand">Medium</Link>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Home</NavLink>
                        </li>
                        {currentUserState.isLoggedIn ? renderNavWhenUserLoggedIn() : renderNavWhenUserIsNotLoggedIn()}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default TopBar;
