import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../context/currentUserContext';

interface IProps {
    tagName?: string;
}

const FeedToggled = ({ tagName }: IProps) => {
    const [currentUser] = useContext<any>(CurrentUserContext);

    const renderTagFeed = () => (
        <li className="nav-item">
            <NavLink to={`/tags/${tagName}`} className="nav-link">
                <i className="ion-pound" />
                {tagName}
            </NavLink>
        </li>
    );

    const renderYourFeed = () => (
        <li className="nav-item">
            <NavLink to="/feed" className="nav-link">Your feed</NavLink>
        </li>
    );

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {currentUser.isLoggedIn && renderYourFeed()}
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Global feed</NavLink>
                </li>
                {tagName && renderTagFeed()}
            </ul>
        </div>
    );
};

export default FeedToggled;
