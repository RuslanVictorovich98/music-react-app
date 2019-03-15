import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewTrack} from '../actions/details_actions';
import {saveChanges} from '../actions/music_actions';
import '../index.css';
// import { store } from '..';
// import {bindActionCreators} from 'redux';
// import {details} from '../actions/details_actions';
// import {edit} from '../actions/details_actions';

class DetailsMusic extends Component {
  state = {
    result: [{name: 1}],
  };

// DETAILS MUSIC
    detailsStoreMusicData(){
      return this.props.trackDetails.map ((track, i) => {
        return (
          <div key={i}>
            <h4>{track.artist} - {track.name}</h4>
            <p>time: {track.time}</p>
            <p>year: {track.year}</p>
          </div>
        );
      });
    }

// CREATE TRACK
  id      = React.createRef();
  name    = React.createRef();
  time    = React.createRef();
  year    = React.createRef();
  artist  = React.createRef();

  handleSubmit = this.handleSubmit.bind(this);
  getState = this.getState.bind(this);
  getState(){}
  // getState = this.getState.bind(this);

  handleSubmit(){ // return new object
     this.setState({result: [{
                       ["id"]: this.id.current.value,
                       ["artist"]: this.artist.current.value,
                       ["name"]: this.name.current.value,
                       ["time"]: this.time.current.value,
                       ["year"]:+this.year.current.value
                      }]}, ()=>{return this.state.result.map((track, i) => {
                                            return this.props.addNewTrack(track)
                                    })
                                    });


     console.log("Your input value is: " + this.state +
                 "\nartist:"   + this.artist.current.value +
                 "\nname:" + this.name.current.value +
                 "\ntime:" + this.time.current.value +
                 "\nyear:" + this.year.current.value)
 }

// CREATE NEW TRACK
   createTrack() {
    return (
      <div className="add-new-playlist">
        <form>
          <div className="form-group">
            <label>id:</label>
            <input type="number" className="form-control form-control-sm" ref={this.id} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit id"/>
          </div>
          <div className="form-group">
            <label>Artist:</label>
            <input type="name" className="form-control form-control-sm" ref={this.artist} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit artist"/>
          </div>
          <div className="form-group">
            <label >Name:</label>
            <input type="name" className="form-control form-control-sm" ref={this.name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit name track"/>
          </div>
          <div className="form-group">
            <label >Time:</label>
            <input type="time" className="form-control form-control-sm" ref={this.time} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit time track"/>
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input type="number" className="form-control form-control-sm" ref={this.year} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edit year"/>
          </div>
        </form>
        <hr/>
        <button className="btn btn-sm btn-success"  onClick={ this.handleSubmit}>create</button>
      </div>
    );
  }




// editTrack
  edit_id      = React.createRef();
  edit_artist  = React.createRef();
  edit_name    = React.createRef();
  edit_time    = React.createRef();
  edit_year    = React.createRef();
  editHandleSubmit = this.editHandleSubmit.bind(this);

  editHandleSubmit(){
    this.setState({result: [{
                      ["id"]: this.edit_id.current.value,
                      ["artist"]: this.edit_artist.current.value,
                      ["name"]: this.edit_name.current.value,
                      ["time"]: this.edit_time.current.value,
                      ["year"]:+this.edit_year.current.value
                     }]}, ()=>{ return this.state.result.map((track, i) => {
                                          return this.props.saveChanges(track, track.id)
                                        })
                                       });

    console.log("Your input value is: " + this.state +
                "\nid:" + this.edit_id.current.value +
                "\nartist:"   + this.edit_artist.current.value +
                "\nname:" + this.edit_name.current.value +
                "\ntime:" + this.edit_time.current.value +
                "\nyear:" + this.edit_year.current.value)

  }// промежуточный метод
// readonly
  editTrack(){
    return this.props.edit.map ((track, i) => {

      return (
        <div key={i}>
          <h4>{track.id}: {track.artist} - {track.name}</h4>
          <form>
          <div className="form-group">
            <label>id:  </label><kbd>{track.id}</kbd>
            <input type="number" readOnly className="form-control form-control-sm" ref={this.edit_id} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={track.id} value={track.id}/>
          </div>
            <div className="form-group">
              <label>Artist:  </label><kbd>{track.artist}</kbd>
              <input type="text" className="form-control form-control-sm" ref={this.edit_artist} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={track.artist}/>
            </div>
            <div className="form-group">
              <label >Name:</label><kbd>{track.name}</kbd>
              <input type="text" className="form-control form-control-sm" ref={this.edit_name} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={track.name}/>
            </div>
            <div className="form-group">
              <label >Time:</label><kbd>{track.time}</kbd>
              <input type="time" className="form-control form-control-sm" ref={this.edit_time} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={track.time}/>
            </div>
            <div className="form-group">
              <label>Year:</label><kbd>{track.year}</kbd>
              <input  type="number" className="form-control form-control-sm" ref={this.edit_year} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={track.year}/>
            </div>
          </form>
          <button type="submit" onClick={ this.editHandleSubmit} className="btn btn-sm btn-primary btn_group">EDIT</button>
        </div>
      );
    });
  }

// SHOW TABS
  showTabs(){
    return (
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Add new track</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Edit</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><br/>{this.detailsStoreMusicData()}</div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><br/>{this.createTrack()}</div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><br/>{this.editTrack()}</div>
        </div>
      </div>
    );
  }

// return HTML
  render(){
    return (
      <div className="container details_music_containers align-self-start">
          {this.showTabs()}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    music: state.music,
    trackDetails: state.details,
    track: state.allTracks,
    edit: state.musicEdit

  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    addNewTrack: (i) => dispatch(addNewTrack(i)),
    saveChanges: (i, id) => dispatch(saveChanges(i, id)),
  } ;
}

export default connect (mapStateToProps, mapDispatchToProps)(DetailsMusic);
