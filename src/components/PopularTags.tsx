import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

import useFetch from '../hooks/useFetch';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

const PopularTags = () => {
    const [{ isLoading, response, error }, doFetch] = useFetch(API.GET_TAGS());
    useEffect(() => doFetch(), [doFetch]);

    if (isLoading || !response) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage />;
    }

    return (
        <div className="sidebar">
            <p>PopularTags</p>
            <div className="tag-list">
                {response.tags.map(tag => (
                    <Link to={`/tags/${tag}`} className="tag-default tag-pill" key={tag}>
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularTags;
