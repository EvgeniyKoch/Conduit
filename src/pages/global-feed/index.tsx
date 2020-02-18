import React, { useEffect } from 'react';

import API from '../../api';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import PopularTags from '../../components/PopularTags';
import useFetch from '../../hooks/useFetch';
import Feed from '../../components/Feed';
import { getPaginator, LIMIT } from '../../utils';

const GlobalFeed = ({ location, match }) => {
    const { currentPage, offset } = getPaginator(location.search);
    const [{ isLoading, response, error }, doFetch] = useFetch(API.GET_ARTICLES(LIMIT, offset));

    useEffect(() => {
        doFetch();
    }, [doFetch, currentPage]);

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

export default GlobalFeed;
