import React from "react";
import TodoListItem from '../todo_list/todo_list_item';

export default class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map(todo => <TodoListItem todo={todo} />)}
      </ul>
    )
  }
}