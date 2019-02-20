import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './reducers/index';

export const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);


serviceWorker.unregister();

// console.log("Состояние стора:" + store.getState());
store.subscribe(() => {
  console.log("subscribe: " + store.getState());
})
