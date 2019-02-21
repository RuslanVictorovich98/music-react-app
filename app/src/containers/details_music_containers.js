import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {details} from '../actions/details_actions'
import { store } from '..';
import '../index.css';

class DetailsMusic extends Component {

  // details_music
    detailsStoreMusicData(){
      return this.props.truck.map ((truck) => {
        return (
          <div key={truck.id}>
            <h3>{truck.artist} - {truck.name}</h3>
            <p>time: {truck.time}</p>
            <p>year: {truck.year}</p>
          </div>
        );
      });
    }

  render(){
    return (
      <div>
        <br/>
      <span>Подробно:</span>
      <hr/>
      {this.detailsStoreMusicData()}
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    music: state.music,
    truck: state.details
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({details: details},dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(DetailsMusic);
