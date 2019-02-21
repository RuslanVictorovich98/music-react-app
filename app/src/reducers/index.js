import {combineReducers} from 'redux';
// import musicReducer from './music_reducers';
import {musicInfoReducers} from './music_reducers';
import {musicDetailsReducers} from './details_music_reducers';

const mainReducer = combineReducers ({
    music: musicInfoReducers,
    details: musicDetailsReducers
  // music: musicReducer,
});

export default mainReducer;
