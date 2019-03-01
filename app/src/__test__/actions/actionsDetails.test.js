import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import * as detailsActions from "../../actions/details_actions";

const initialState = {
  detailsStore: [],
  addTrackStore: [],
  editTrackStore: []
};



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore(initialState.detailsStore);
const storeAdd = mockStore(initialState.addTrackStore);
const storeEdit = mockStore(initialState.editTrackStore)
// const def = mockStore(defState);


describe('detailsActions', () => {
   it('shoult return details info track', () => {
       const track = [{ type: detailsActions.DETAILS_MUSIC_DATA, payload: 'track'}];
       store.dispatch(detailsActions.details('track'));
       expect(store.getActions()).toEqual(track);
   });

  it('should return new track object', () => {
    const newTrack = [{ type: detailsActions.ADD_NEW_TRACK, payload: 'track'}];
    storeAdd.dispatch(detailsActions.addNewTrack('track'));
    expect(storeAdd.getActions()).toEqual(newTrack);
  });

  it('should return edit track', () => {
    const editTrack = [{ type: detailsActions.EDIT_MUSIC, payload: 'track'}];
    storeEdit.dispatch(detailsActions.edit('track'));
    expect(storeEdit.getActions()).toEqual(editTrack);
  });
});

