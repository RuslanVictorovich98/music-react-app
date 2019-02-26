import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../actions/music_actions';
import {remove} from '../actions/music_actions';
import {details} from '../actions/details_actions';
import {edit} from '../actions/details_actions';
import DetailsMusic from './details_music_containers';
import '../index.css';
import right from './img/right.png';
import deleteTrack from './img/delete-24.png';
import editTrack from './img/edit.png';
// import {addNewTrack} from '../actions/details_actions';
// import {bindActionCreators} from 'redux';
// import mainReducer from '../reducers/index';
// import { store } from '..';

class MusicAdd extends Component {

  state = {
    result: [
      {
        artist: "Drake",
        name: "Black",
        time: "2:15",
        year: 2012,
      },
      {
        artist: "Adel",
        name: "White",
        time: "3:10",
        year: 2018,
      }
    ],
  };


  showList() { // вывод всех песен и добавление песни в глобальный STORE
    return this.props.track.map((track, i) =>    {
      return (
        <div key={i} className="all-track-block-details">
          <span onClick={() => this.props.details(track)}>{track.artist} - {track.name}</span>
          <img src={right} alt="+" onClick={() => this.props.select(track)}/>
          <img src={editTrack} alt="|" onClick={() => this.props.edit(track)} width="20px"/>
          <img src={deleteTrack} alt="-" onClick={() => this.props.remove(i)}/>
        </div>
      );
    }
  );
  }

  storeMusicData() { // Вывод стора
    return this.props.music.map ((music, i) => {
      return(
        <div key={i}>
            <span onClick={() => this.props.details(music)}>{music.artist} - {music.name}</span>
        </div>
      )
    });
  }
  getState() {
    // console.log(this.state);
  }

  showState(){
    return this.state.addTrack.map((track) =>{
      return (
        <div>
          {track.name}
        </div>
      );
    });
  }




// return HTML
  showDetails(){
    return (
      <div className="container create-playlist ">
        <h4>Create PLAYLIST:</h4>
        <div className=" row">
        <div className="container all-track col-md-12 col-xs-12 col-sm-12 col-lg-6">
          <h5>All tracks:</h5>
          <div className="container all-track-block ">
            {this.showList()}
          </div>
        </div>

        <div className="container all-track col-md-12 col-xs-12 col-sm-12 col-lg-6">
          <h5>Added songs :</h5>
          <div className="container all-track-block ">
            {this.storeMusicData()}
          </div>
        </div>
        </div>
      </div>
    );
  }
// main
  render(){
    return (
      <div>
        {this.showDetails()}
        <DetailsMusic/>
      </div>
    );

  }
}

// <button type="button" onClick={this.getState}>Get State!</button>

function mapStateToProps(state) {
  return {
    music: state.music,
    track: state.allTracks
  };
}
const mapDispatchToProps = (dispatch) => {
    return {
        select: (i) => dispatch(select(i)),
        details: (i) => dispatch(details(i)),
        remove: (i) => dispatch(remove(i)),
        edit: (i) => dispatch(edit(i)),
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(MusicAdd);
