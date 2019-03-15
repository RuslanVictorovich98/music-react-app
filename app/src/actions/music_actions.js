export const ADD_MUSIC = 'ADD_MUSIC';
export const SHOW_MUSIC = 'SHOW_MUSIC';
export const REMOVE_MUSIC = 'REMOVE_MUSIC';
export const SAVE_CHANGES = 'SAVE_CHANGES';

export function select(music) {
    return {
      type: ADD_MUSIC,
      payload: music,
    };
}

export function remove(music) {
  return {
    type: REMOVE_MUSIC,
    payload: music,
  };
}

export function saveChanges(music, id) {
  alert("DETAILS ACTIONS:");
  return {
    type: SAVE_CHANGES,
    payload: music,
    id: id
  };
}
