import axios from 'axios';

const ALBUMS_API_HOST_URL = 'https://rallycoding.herokuapp.com/api/';

export default axios.create({
  baseURL: ALBUMS_API_HOST_URL
});
