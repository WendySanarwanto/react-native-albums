import { FETCH_ALBUMS } from './types';
import albumsApi from '../api/albumsApi';

const MUSIC_ALBUMS_API_PATH = 'music_albums';

export const doFetchAlbums = () => async (dispatch) => {
  let payload = [];
  const response = await albumsApi.get(MUSIC_ALBUMS_API_PATH);
  if (response && response.status === 200) {
    payload = [...payload, ...response.data];
  }
  dispatch({
    type: FETCH_ALBUMS,
    payload
  });
}