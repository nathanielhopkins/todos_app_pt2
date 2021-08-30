import React from "react";

export default class TodoListItem extends React.Component {
  handleDelete(e, todo) {
    e.preventDefault();
    this.props.removeTodo(todo);
  }
  
  render() {
    const { todo } = this.props;

    return(
      <li className='todo-list-item'>
        <h3>{todo.title}</h3>
        <button>{todo.done == false ? 'Done' : 'Undo'}</button>
        <button onClick={(e)=>this.handleDelete(e, todo)}>Delete</button>
      </li>
    )
  };
};