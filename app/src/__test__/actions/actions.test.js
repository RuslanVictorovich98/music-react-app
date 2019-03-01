import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import * as actions from "../../actions/music_actions";
import * as detailsActions from "../../actions/details_actions";
import {DETAILS_MUSIC_DATA} from "../../actions/details_actions";

const initialState = [{id: 1, artist: "Drake", name: "Black", time: "2:15", year: 2012}];


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);



describe('actions', () => {
    it('should return action: select, type ADD_MUSIC and music obj', () => {
        const music = {id: 1, artist: "Drake", name: "Black", time: "2:15", year: 2012};
        const addingActions = {
            type: actions.ADD_MUSIC,
            payload: music
        };
        expect(actions.select(music)).toEqual(addingActions);
    });
    // it('should object', () => {
    //     const obj = {id: 1, artist: "Drake", name: "Black", time: "2:15"};
    //     const addActs = {
    //         type: actions.ADD_MUSIC,
    //         payload: obj
    //     };
    //     expect(actions.select(obj)).toEqual(addActs);
    //
    // });

    it("should return action: select", () => {
        const music = "music";
        const expected = [{ type: actions.ADD_MUSIC, payload: music}];
        store.dispatch(actions.select(music));
        expect(store.getActions()).toEqual(expected);
    });



    it('should return action: remove, type REMOVE_MUSIC and  music obj', function () {
        const music = "music";
        const removeActions = {
            type: actions.REMOVE_MUSIC,
            payload: music
        };
        expect(actions.remove(music)).toEqual(removeActions);
    });

    it('should return action: saveChanges', () => {
        const music = 'music';
        const id = 'id';
        const saveChangesActions = {
            type: actions.SAVE_CHANGES,
            payload: music,
            id: id
        };
        expect(actions.saveChanges(music, id)).toEqual(saveChangesActions);
    } )

});


