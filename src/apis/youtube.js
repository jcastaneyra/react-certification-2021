const gapiSetup = async () => {
  /* global gapi */
  /* eslint no-undef: "error" */
  let counter = 0;
  while (!gapi || (!gapi.client && counter < 10)) {
    counter += 1;
    /* eslint-disable no-await-in-loop */
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
};

const youtubeList = async () => {
  let videos = [];
  let error = null;
  console.log(`invoking google api list`);
  try {
    await gapiSetup();

    if (!gapi || !gapi.client) {
      return [videos, 'no global gapi available'];
    }

    const { result } = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&maxResults=25&chart=mostPopular&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`,
    });
    videos = result.items;
    console.log(videos);
  } catch (reason) {
    console.log(reason);
    error = reason;
  }

  return [videos, error];
};

const youtubeSearch = async (search) => {
  let videos = [];
  let error = null;
  console.log(`invoking api with search ${search}`);
  // console.log(`invoking mocking with search ${search}`);
  try {
    await gapiSetup();

    if (!gapi || !gapi.client) {
      return [videos, 'no global gapi available'];
    }

    const { result } = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${search}&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`,
    });
    videos = result.items;
    // videos = mockData.items;
    console.log(videos);
  } catch (reason) {
    console.log(reason);
    error = reason;
  }

  return [videos, error];
};

const youtubeGetVideoByID = async (videoId) => {
  let video = null;
  let error = null;

  console.log(`involing youtube api with id ${videoId}`);
  try {
    await gapiSetup();

    if (!gapi || !gapi.client) {
      return [video, 'no global gapi available'];
    }

    const { result } = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&id=${videoId}&regionCode=MX&key=${process.env.REACT_APP_API_KEY}`,
    });
    console.log(result);
    let rest;
    [video, ...rest] = result.items;
    console.log(rest);
  } catch (reason) {
    console.log(reason);
    error = reason;
  }

  return [video, error];
};

const youtubeRelatedVideos = async (videoId) => {
  let videos = null;
  let error = null;

  console.log(`involing youtube api with id ${videoId}`);
  try {
    await gapiSetup();

    if (!gapi || !gapi.client) {
      return [videos, 'no global gapi available'];
    }

    const { result } = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`,
    });
    videos = result.items;
    console.log(videos);
  } catch (reason) {
    console.log(reason);
    error = reason;
  }

  return [videos, error];
};

export { youtubeList, youtubeSearch, youtubeGetVideoByID, youtubeRelatedVideos };
