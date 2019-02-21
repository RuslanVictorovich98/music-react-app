import {DETAILS_MUSIC_DATA} from '../actions/details_actions';

const detailsState =  [];


export function musicDetailsReducers(state = detailsState, action) {

  switch (action.type) {
    case DETAILS_MUSIC_DATA:
      return [action.payload];
      break;

      default:
      return state;

  }
}
