import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
    tagName?: string;
}

const FeedToggled = ({ tagName }: IProps) => {
    const renderTagFeed = () => (
        <li className="nav-item">
            <NavLink to={`/tags/${tagName}`} className="nav-link">
                <i className="ion-pound" />
                {tagName}
            </NavLink>
        </li>
    );

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <NavLink to="/feed" className="nav-link">Your feed</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Global feed</NavLink>
                </li>
                {tagName && renderTagFeed()}
            </ul>
        </div>
    );
};

export default FeedToggled;
