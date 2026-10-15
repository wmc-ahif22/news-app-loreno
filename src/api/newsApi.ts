import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://gnews.io/api/v4',
  timeout: 5000,
  params: {
    apikey: import.meta.env.VITE_GNEWS_API_KEY,
  },
});

export default newsApi;
