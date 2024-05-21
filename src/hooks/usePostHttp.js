import { useState } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/', 
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

const httpMethod = (url, method, body) =>{
  switch(method){
    case 'POST':
      return axiosInstance.post(url, body);
    case 'PUT':
      return axiosInstance.put(url, body);
  }
}

const usePostHttp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async (url, method, body) => {
    setLoading(true);
    try {
      const response = await httpMethod(url, method, body);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, sendRequest };
};

export default usePostHttp;