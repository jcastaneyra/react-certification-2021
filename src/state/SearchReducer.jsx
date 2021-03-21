export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return {
        ...state,
        videos: [...action.payload.videos],
      };
    case 'SET_SELECTED_VIDEO':
      return {
        ...state,
        selectedVideo: action.payload.selectedVideo,
      };
    default:
      throw new Error('Unkown action');
  }
}
