import {ADD_MUSIC, SHOW_MUSIC, REMOVE_MUSIC, SAVE_CHANGES} from '../actions/music_actions';
import {ADD_NEW_TRACK} from '../actions/details_actions';

const initialState =  [];

const allTracks =  [
    {
      id: 1,
      artist: "Drake",
      name: "Black",
      time: "2:15",
      year: 2012,
    },
    {
      id: 2,
      artist: "Adel",
      name: "White",
      time: "3:10",
      year: 2018,
    }
  ];

export function musicInfoReducers(state = initialState, action) {

  switch (action.type) {
    case ADD_MUSIC:
      return [...state, action.payload];

      default:
      return state;

  }
}

export function allTracksReducers(state = allTracks, action) {
  console.log(action.id);
  switch (action.type) {
    case SHOW_MUSIC:
      return [...state, action.payload];

    case ADD_NEW_TRACK:
      return [...state, action.payload];

    case REMOVE_MUSIC:
      return state.splice(action.payload, 1),[...state];

    case SAVE_CHANGES: {
      let new_state = state.slice()
      new_state[action.id-1] = action.payload
      return new_state
    }
      //return state[0] = action.payload,[...state];
      //break;

      default:
      return state;
  }
}
