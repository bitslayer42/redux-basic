import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './Reducer';
import { createStore } from 'redux';

let store = createStore(reducer);

render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
