import axios from 'axios';

const axiosCall = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: `${process.env.REACT_APP_API_KEY}`,
  },
});

export default axiosCall;
