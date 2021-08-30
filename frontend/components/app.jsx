import React from 'react';
import ToDoListContainer from './todo_list/todo_list_container'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <ToDoListContainer />
      </div>
    );
  }
}