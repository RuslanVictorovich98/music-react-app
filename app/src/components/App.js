import React from 'react';
import MusicMain from './music_main_components';
import Header from './Header';


const App = () => (

      <div>
        <Header />
        <div className="container top-container">
            <h3>All track</h3>
            <h3>New items</h3>
            <h3>Playlist</h3>
        </div>
        <MusicMain />
      </div>
);

export default App;
 