export const DETAILS_MUSIC_DATA = 'DETAILS_MUSIC_DATA';

export function details(truck) {
  return {
    type: DETAILS_MUSIC_DATA,
    payload: truck,
  };
}
