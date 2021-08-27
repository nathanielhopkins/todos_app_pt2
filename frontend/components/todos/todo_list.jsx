import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from "../todo_list/todo_form";

export default class TodoList extends React.Component {
  render() {
    return(
      <div>
      <TodoForm />
      <ul className='todo-list'>
        {this.props.todos.map(todo => <TodoListItem todo={todo} />)}
      </ul>
      </div>
    )
  }
}