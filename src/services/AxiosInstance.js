import axios from 'axios';
import config from '../Config';

const token = localStorage.getItem('token');

export const axiosInstanceWithHeader = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Authorization': 'Bearer '+token, 
        'Content-Type': 'application/json',
    },
});

export const axiosInstanceWithoutHeader = axios.create({
    baseURL: config.BASE_URL,
});
