export const ADD_MUSIC = 'ADD_MUSIC';

export function select(music) {
    return {
      type: ADD_MUSIC,
      payload: music,
    };
}
