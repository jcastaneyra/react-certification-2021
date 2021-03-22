// import mockData from '../youtube-videos-mock.json';

const youtubeSearch = async (search = 'wizeline') => {
  let videos = [];
  let error = null;
  console.log(`invoking api with searh ${search}`);
  try {
    /* global gapi */
    /* eslint no-undef: "error" */
    const { result } = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&maxResults=25&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`,
    });
    videos = result.items;
    // videos = mockData.items;
  } catch (reason) {
    console.log(reason);
    error = reason;
  }

  return [videos, error];
};

export default youtubeSearch;
