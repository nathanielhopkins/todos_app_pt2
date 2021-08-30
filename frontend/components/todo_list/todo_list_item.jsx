import React from "react";

export default class TodoListItem extends React.Component {
  render() {
    const {removeTodo, receiveTodo, todo} = this.props;

    return(
      <li className='todo-list-item'>
        <h3>{todo.title}</h3>
        <button onClick={removeTodo}>Delete</button>
      </li>
    )
  };
};