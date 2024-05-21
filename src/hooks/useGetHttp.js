import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/', 
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

const useGetHttp = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  })

  useEffect(() => {
    fetchData();

    // Clean up function
    return () => {
      // Cancel any ongoing requests
    };
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

export default useGetHttp;