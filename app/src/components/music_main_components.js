import React from 'react';
import MusicAdd from '../containers/music_add_containers';

const MusicMain = () => (
      <div className="container music-main">
          <input type="search" className="find-input"/><button className="sent-input btn btn-primary">find</button>
        <MusicAdd />
      </div>
);

export default MusicMain;
