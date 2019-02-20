import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {select} from '../actions/music_actions'
import {details} from '../actions/details_actions'
import DetailsMusic from './details_music_containers'
import { store } from '..';
import '../index.css';
// import mainReducer from '../reducers/index';

class MusicAdd extends Component {

  state = {
    result: [
      {
        id: 2,
        artist: "Drake",
        name: "Black",
        time: "2:15",
        year: 2012,
      },
      {
        id: 3,
        artist: "Adel",
        name: "White",
        time: "3:10",
        year: 2018,
      }
    ],
  };


  showList() { // добавление песни в глобальный STORE
    return this.state.result.map((truck) =>    {
      return (
        <div key={truck.id} className="all-truck-block-details">
            <span onClick={() => this.props.details(truck)}>{truck.artist} - {truck.name}</span>
            <button type="button" name="button" onClick={() => this.props.select(truck)} >+</button>
            {console.log(truck)}
        </div>
      );
    }
  );
  }

  storeMusicData() { // Вывод стора
    return this.props.music.map ((music) => {
      return(
        <div key={music.id}>
            <p onClick={() => this.props.details(music)}>{music.artist} - {music.name}</p>
        </div>
      )
    });
  }



// CREATE TRUCK
  id = React.createRef();
  name = React.createRef();
  time = React.createRef();
  year = React.createRef();
  artist = React.createRef();

  handleSubmit = this.handleSubmit.bind(this);
  getState = this.getState.bind(this);




  handleSubmit(){
  this.setState({result: [...this.state.result, {
                              ["id"]:+  this.id.current.value,
                              ["artist"]: this.artist.current.value,
                              ["name"]: this.name.current.value,
                              ["time"]: this.time.current.value,
                              ["year"]:+this.year.current.value
                             }]})

  console.log("Your input value is: " + this.state +
              "\nid:"   + this.id.current.value +
              "\nartist:"   + this.artist.current.value +
              "\nname:" + this.name.current.value +
              "\ntime:" + this.time.current.value +
              "\nyear:" + this.year.current.value)
  }

  getState() {
    console.log(this.state);

  }

  showState(){
    return this.state.addTruck.map((truck) =>{
      return (
        <div>
          {truck.name}
        </div>
      );
    });
  }

  createPlaylist() {
    return (
      <div className="add-new-playlist">
        <span className="span-id">ID: </span><input type="number" ref={this.id} /><br/>
        <span>Artist: </span><input type="text"  ref={this.artist} /><br/>
        <span>Name: </span><input type="text"  ref={this.name} /><br/>
        <span>Time: </span><input type="time"  ref={this.time} /><br/>
        <span>Year: </span><input type="number"  ref={this.year} /><br/>
        <input className="handleSubmit" type="submit" onClick={this.handleSubmit}/>


      </div>
    );
  }
// ****
  showDetails(){
    return (
      <div>
      <div className="create-playlist">
        <h3>Create PLAYLIST:</h3>
        <div className="all-truck">
          <h4>All truck:</h4>
          <div className="all-truck-block">
            {this.showList()}
          </div>
        </div>

        <div className="all-truck">
          <h4>Added songs to the store:</h4>
          <div className="all-truck-block">
            {this.storeMusicData()}
          </div>
        </div>
      </div>
      <div className="add-new-truck">
        <h3>Add new truck:</h3>
        {this.createPlaylist()}
        <DetailsMusic />
      </div>
      </div>
    );
  }

// return HTML
  render(){
    return (
      <div>
        {this.showDetails()}
        <button type="button" onClick={this.getState}>Get State!</button>

      </div>
    );

  }
}


function mapStateToProps(state) {
  return {
    music: state.music,
    details: state.details
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({select: select, details: details},dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(MusicAdd);
