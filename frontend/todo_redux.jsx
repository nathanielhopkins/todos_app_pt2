import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';

let store = configureStore;
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});