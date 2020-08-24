export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST_INFO':
            return {
                ...state,
                playlist_info: action.playlist_info
            }
        default:
            return state;
    }
}

export default reducer;