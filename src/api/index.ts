export const API = {
    BASE: () => 'https://conduit.productionready.io/api',
    USER_LOGIN: () => `${API.BASE()}/users/login`,
    USER_REGISTER: () => `${API.BASE()}/users`,
    GET_USER: () => `${API.BASE()}/user`,
    GET_ARTICLES: (limit = 10, offset = 0, tagName = '') => `${API.BASE()}/articles?limit=${limit}&offset=${offset}&tag=${tagName}`,
    GET_ARTICLE: slug => `${API.BASE()}/articles/${slug}`,
    GET_FEED: (limit = 10, offset = 0) => `${API.BASE()}/articles/feed?limit=${limit}&offset=${offset}`,
    GET_TAGS: () => `${API.BASE()}/tags`,
};
