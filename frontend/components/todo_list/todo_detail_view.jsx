import React from 'react';
import StepListContainer from '../step_list/step_list_container';

export default class TodoDetailView extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const { todo } = this.props;
    return(
      <div className='todo-detail-view'>
        <p className='detail-body'>{todo.body}</p>
        <StepListContainer todoId={todo.id} />
        <button
          className='todo-delete'
          onClick={(e) => this.handleDelete(e)}>Delete Todo</button>
      </div>
    );
  };
};