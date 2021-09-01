import React from 'react';
import StepForm from './step_form';
import StepsListItemContainer from './step_list_item_container';

export default class StepList extends React.Component { 
  render() {
    const { steps, todoId, receiveStep } = this.props;
    
    return(
      <div>
        <ul>
          {steps.map(step => <li key={step.id}><StepsListItemContainer step={step} /></li>)}
        </ul>
        <StepForm receiveStep={receiveStep} todoId={todoId} />
      </div>
    );
  };
};