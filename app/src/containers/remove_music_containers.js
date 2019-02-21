import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {details} from '../actions/details_actions'
import { store } from '..';
import '../index.css';

class RemoveMusic extends Component {

  onDeleteClick = (e) => {
    const id = e.currentTarget.dataset.myId
    const arr =
    this.setState({ users:  })
  }

  let user = this.props.users.map(function(user){
        return <li key={user.id}><User number={user.id} id={user.id} text={user.id} onDeleteClick={this.onDeleteClick}/></li>
   })
  render() {
   <div>
     <button onClick={this.props.onDeleteClick} data-my-index={this.props.user.id}> Удалить</button>
   </div>
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

export default connect (mapStateToProps, mapDispatchToProps)(RemoveMusic);
