import { useState, useEffect } from 'react';
import axiosInstance from './apiQueries';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Replace 'process.env.REACT_APP_BASE_URL' with your actual base URL
        const response = await axiosInstance.get('/user-login');
        setUserInfo(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { userInfo, loading, error };
};

export default useUserInfo;
