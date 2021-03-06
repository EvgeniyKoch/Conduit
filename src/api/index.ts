const API = {
    BASE: () => 'https://conduit.productionready.io/api',
    USER_LOGIN: () => `${API.BASE()}/users/login`,
    USER_REGISTER: () => `${API.BASE()}/users`,
    GET_USER: () => `${API.BASE()}/user`,
    GET_ARTICLES: (limit = 10, offset = 0, tagName = '') => `${API.BASE()}/articles?limit=${limit}&offset=${offset}&tag=${tagName}`,
    GET_TAGS: () => `${API.BASE()}/tags`,
};

export default API;
