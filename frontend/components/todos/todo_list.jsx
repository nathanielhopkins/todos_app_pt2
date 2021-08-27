import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from "../todo_list/todo_form";
import { receiveTodo } from "../../actions/todo_actions";

export default class TodoList extends React.Component {
  render() {
    return(
      <div>
        <TodoForm receiveTodo={receiveTodo} />
      <ul className='todo-list'>
        {this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
      </div>
    )
  }
}