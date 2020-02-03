const API = {
    BASE: () => 'https://conduit.productionready.io/api',
    USER_LOGIN: () => `${API.BASE()}/users/login`,
};

export default API;
