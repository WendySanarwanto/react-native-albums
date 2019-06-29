import { FETCH_ALBUMS } from '../actions/types';

const INITIAL_STATE = [];

const albums = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case FETCH_ALBUMS:
      const updatedState = [...new Set([...state, ...action.payload])];
      return updatedState;
    default:
      return state;
  }
};

export default albums;
