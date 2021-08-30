import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from "../todo_list/todo_form";


export default class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    return(
      <div>
        <TodoForm receiveTodo={receiveTodo} />
      <ul className='todo-list'>
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
      </div>
    )
  }
}