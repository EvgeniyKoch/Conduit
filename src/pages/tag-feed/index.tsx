import React, { useEffect } from 'react';

import { API } from '../../api';
import ErrorMessage from '../../components/ErrorMessage';
import FeedToggled from '../../components/FeedToggled';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import PopularTags from '../../components/PopularTags';
import useFetch from '../../hooks/useFetch';
import Feed from '../../components/Feed';
import { getPagination, LIMIT } from '../../utils';

const TagFeed = ({ location, match }) => {
    const { slug: tagName } = match.params;
    const { currentPage, offset } = getPagination(location.search);
    const [{ isLoading, response, error }, doFetch] = useFetch(API.GET_ARTICLES(LIMIT, offset, tagName));

    useEffect(() => {
        doFetch();
    }, [doFetch, currentPage, tagName]);

    const renderFeedWithPagination = () => (
        <>
            <Feed articles={response.articles} />
            <Pagination total={response.articlesCount} limit={LIMIT} url={match.url} currentPage={currentPage} />
        </>
    );

    return (
        <div>
            <div className="home-page">
                <div className="banner">
                    <div className="container">
                        <h1>Medium Clone</h1>
                        <p>A place to share knowledge</p>
                    </div>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <FeedToggled tagName={tagName} />
                        {isLoading && <Loading />}
                        {error && <ErrorMessage />}
                        {!isLoading && response && renderFeedWithPagination()}
                    </div>
                    <div className="col-md-3">
                        <PopularTags />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagFeed;
