// import mockData from '../youtube-videos-mock.json';

const youtubeApi = async (apiPath) => {
  try {
    let counter = 0;
    /* global gapi */
    /* eslint no-undef: "error" */
    while (!gapi || (!gapi.client && counter < 10)) {
      counter += 1;
      /* eslint-disable no-await-in-loop */
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (!gapi || !gapi.client || counter >= 10) {
      return [null, 'no global gapi available'];
    }

    const { result } = await gapi.client.request({
      path: apiPath,
    });

    return [result, null];
  } catch (reason) {
    console.log(reason);
    return [null, reason];
  }
};

const youtubeList = () => {
  return youtubeApi(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&maxResults=25&chart=mostPopular&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`
  );
  // return [mockData, null];
};

const youtubeSearch = (search) => {
  return youtubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${search}&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`
  );
};

const youtubeGetVideoByID = (videoId) => {
  return youtubeApi(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&id=${videoId}&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`
  );
};

const youtubeRelatedVideos = (videoId) => {
  return youtubeApi(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`
  );
};

export { youtubeList, youtubeSearch, youtubeGetVideoByID, youtubeRelatedVideos };
