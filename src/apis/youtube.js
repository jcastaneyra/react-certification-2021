import axios from 'axios';

const KEY = 'AIzaSyAxrK7AO74uWR7SRbILmP44qf1OAAPPbw4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
