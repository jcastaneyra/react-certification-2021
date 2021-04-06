export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return {
        ...state,
        firstLoad: false,
        videos: [...action.payload.videos],
      };
    case 'SET_SELECTED_VIDEO':
      return {
        ...state,
        selectedVideo: action.payload.selectedVideo,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
      };
    case 'SHOW_LOGIN':
      return {
        ...state,
        showLogin: true,
      };
    case 'CLOSE_LOGIN':
      return {
        ...state,
        showLogin: false,
      };
    case 'SHOW_MENU':
      return {
        ...state,
        showMenu: true,
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        showMenu: false,
      };
    case 'SET_CURRENT_SESSION':
      localStorage.setItem(
        'youtubeSession',
        JSON.stringify({
          currentSession: action.payload.currentSession,
          favoriteVideos: [],
        })
      );
      return {
        ...state,
        currentSession: action.payload.currentSession,
      };
    case 'CLEAR_CURRENT_SESSION':
      localStorage.removeItem('youtubeSession');
      return {
        ...state,
        currentSession: null,
      };

    default:
      throw new Error('Unkown action');
  }
}
