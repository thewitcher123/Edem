import axios from 'axios';

export const Configuration = {
    API_URL: 'http://localhost:5555/hubcore'
};

const instance = axios.create({
    baseURL: Configuration.API_URL
});

export const createRequest = (requestConfig) => {
    return instance.post('', requestConfig)
};