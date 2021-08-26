import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { configureStore } from './store/store';

let store = configureStore;
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById("root"));
});