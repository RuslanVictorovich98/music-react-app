import {DETAILS_MUSIC_DATA, EDIT_MUSIC} from '../actions/details_actions';

const detailsState =  [];
const editState =  [];


export function musicDetailsReducers(state = detailsState, action) {

  switch (action.type) {
    case DETAILS_MUSIC_DATA:
      return [action.payload];

      default:
      return state;
  }
}

export function musicEditReducers(state = editState, action) {
  switch (action.type) {

    case EDIT_MUSIC:
      return [action.payload];

      default:
      return state;
  }
}
