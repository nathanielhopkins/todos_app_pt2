import React from 'react';
import { stepsByTodoId } from '../../reducers/selectors';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = { done: false}
  }
  
  toggleDone(e) {
    e.preventDefault();
    this.setState({done: !this.state.done})
  }

  render() {
    const { title, body } = this.props.step;
    const { removeStep, receiveStep } = this.props;

    return(
    <div>
      <h4 className='step-list-item-title'>{title}</h4>
      <p className='step-list-item-body'>{body}</p>
      <button 
        className='step-list-item-toggle'
        onClick={this.toggleDone}
        >{this.state.done ? "Undo" : "Done"}</button>
      <button 
        className='step-list-item-delete'
        onClick={removeStep}
        >Delete Step</button>
    </div>
    );
  }
}