import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { configureStore } from './store/store';
import App from './components/app';

let store = configureStore;
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});