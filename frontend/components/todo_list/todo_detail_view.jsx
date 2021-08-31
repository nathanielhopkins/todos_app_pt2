import React from 'react';

export default class TodoDetailView extends React.Component {
  render() {
    const { todo, removeTodo } = this.props;
    return(
      <div>
        <p className='detail-body'>{todo.body}</p>
        <button
          className='todo-delete'
          onClick={removeTodo}>Delete Todo</button>
      </div>
    );
  };
};