import {ADD_MUSIC} from '../actions/music_actions';

const initialState =  [];

const allTrucks = {id: 10, name: "Raul"};
// console.log(initialState.music);

export function musicInfoReducers(state = initialState, action) {

  // console.log("Стейт: " + state + "|  action.payload: " + action.payload);
  // console.log(action.payload);

  switch (action.type) {
    case ADD_MUSIC:
      return [...state, action.payload];
      break;

      default:
      return state;

  }
}



/*
case UPDATE_MUSIC_DATA:
return {
  ...state,
  music: action.payload
};
break;
*/
