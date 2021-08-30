import React from "react";

export default class TodoListItem extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleDone(e) {
    e.preventDefault();

    let toggled = Object.assign({}, this.props.todo);
    toggled.done = !toggled.done;
    this.props.receiveTodo(toggled);
  }
  
  render() {
    const { todo } = this.props;

    return(
      <li className='todo-list-item'>
        <h3 onClick={(e)=>console.log(this.props.todo)}>{todo.title}</h3>
        <button onClick={(e)=>this.handleDone(e)}>{todo.done == false ? 'Done' : 'Undo'}</button>
        <button onClick={(e) =>this.handleDelete(e)}>Delete</button>
      </li>
    )
  };
};