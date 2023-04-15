import axios from 'axios';

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

instance.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.headers.Authorization = "Bearer " + localStorage.getItem('ACCESS_TOKEN');
        return config;
    });

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const {response} = error;
    //401 is authorization error
    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
});

export default instance;
