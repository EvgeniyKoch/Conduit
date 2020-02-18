import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { range } from '../utils';

interface IPagination {
    total: number;
    limit: number;
    url: string;
    currentPage: number;
}

interface IPaginationItem {
    currentPage: number;
    url: string;
    page: number;
}

const PaginationItem = ({ page, currentPage, url }: IPaginationItem) => (
    <li className={cn('page-item',  { active: currentPage === page })}>
        <Link  className="page-link" to={`${url}?page=${page}`}>{page}</Link>
    </li>
);

const Pagination = ({ total, limit, url, currentPage }: IPagination) => {
    const pageCount = Math.ceil(total / limit);
    const pages = range(1, pageCount);

    return (
        <ul className="pagination">
            {pages.map(page => <PaginationItem key={page} page={page} currentPage={currentPage} url={url} />)}
        </ul>
    );
};

export default Pagination;
