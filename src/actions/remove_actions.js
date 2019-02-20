export const REMOVE_MUSIC_DATA = 'REMOVE_MUSIC_DATA';

export function remove(truck) {
  return {
    type: REMOVE_MUSIC_DATA,
    payload: truck,
  };
}
