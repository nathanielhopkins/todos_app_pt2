import React from "react";
import TodoDetailView from './todo_detail_view';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = { detail: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  handleDone(e) {
    e.preventDefault();

    let toggled = Object.assign({}, this.props.todo);
    toggled.done = !toggled.done;
    this.props.receiveTodo(toggled);
  }
  
  toggleView(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail });
  }

  render() {
    const { todo } = this.props;
    let detail;
    if(this.state.detail) {
      detail = <TodoDetailView todo={todo} />;
    }
    return(
      <li className='todo-list-item'>
        <h3><a onClick={this.toggleView}>{todo.title}</a></h3>
        <button onClick={(e)=>this.handleDone(e)}>{todo.done == false ? 'Done' : 'Undo'}</button>
        {detail}
      </li>
    )
  };
};