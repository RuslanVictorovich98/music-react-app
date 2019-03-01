export const DETAILS_MUSIC_DATA = 'DETAILS_MUSIC_DATA';
export const ADD_NEW_TRACK = 'ADD_NEW_TRACK';
export const EDIT_MUSIC = 'EDIT_MUSIC';

export function details(track) {
  return {
    type: DETAILS_MUSIC_DATA,
    payload: track,
  };
}

export function addNewTrack(track) {
    console.log(track);
    return {
      type: ADD_NEW_TRACK,
      payload: track,
    };
}

export function edit(music) {
  return {
    type: EDIT_MUSIC,
    payload: music
  };
}
