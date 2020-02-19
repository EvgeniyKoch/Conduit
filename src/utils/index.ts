import { parse } from 'query-string';

export const range = (start: number, end: number) => [...Array(end).keys()].map(item => item + start);
export const LIMIT = 10;

export const getPagination = (search) => {
    const parsedSearch = parse(search);
    const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1;
    const offset = (currentPage * LIMIT) - LIMIT;

    return { currentPage, offset };
};
