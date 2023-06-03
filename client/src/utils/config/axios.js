import axios from 'axios';
import { errorResponseHelper } from '../helpers/response';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/v1`  
})

axiosInstance.interceptors.response.use(
    response => {
        // If the request was successful, return the response
        return response;
    },
    error => {

        // Return a rejected Promise so that it propagates to the catch block
        return Promise.reject(error);
    }
  );

export default axiosInstance;