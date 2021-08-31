import React from 'react';

export default class TodoDetailView extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    return(
      <div>
        <p className='detail-body'>{todo.body}</p>
        <button
          className='todo-delete'
          onClick={(e) => this.handleDelete(e)}>Delete Todo</button>
      </div>
    );
  };
};