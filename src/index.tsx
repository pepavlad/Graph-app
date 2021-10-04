import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/index';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyCmSfHZXHODsRhM8Hy7VwttWGZ4zzfaZMI',
  authDomain: 'graph-fd4a0.firebaseapp.com',
  databaseURL:
    'https://graph-fd4a0-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'graph-fd4a0',
  storageBucket: 'graph-fd4a0.appspot.com',
  messagingSenderId: '694162396498',
  appId: '1:694162396498:web:c233f72640520cd4b2968b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
