const API = {
    BASE: () => 'https://conduit.productionready.io/api',
    USER_LOGIN: () => `${API.BASE()}/users/login`,
    USER_REGISTER: () => `${API.BASE()}/users`,
};

export default API;
