import React from 'react';
import StepForm from './step_form';
import StepsListItemContainer from './step_list_item_container';

export default class StepList extends React.Component { 
  render() {
    const { steps, todoId, receiveStep } = this.props;
    
    return(
      <div className='step-list-container'>
        <ul className='step-list'>
          {steps.map(step => <li className='step-list-item'
          key={step.id}><StepsListItemContainer step={step} /></li>)}
        </ul>
        <StepForm receiveStep={receiveStep} todoId={todoId} />
      </div>
    );
  };
};