import axios from 'axios';

const api = axios.create({
    baseURL: 'https://prxj61x4m2.execute-api.us-east-2.amazonaws.com/prod'
})

export default api;