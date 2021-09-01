import React from 'react';
import StepForm from './step_form';

export default class StepList extends React.Component { 
  render() {
    const { steps, todoId } = this.props;
    
    return(
      <div>
        <ul>
          {steps.map(step => <li><StepsListItemContainer step={step} /></li>)}
        </ul>
        <StepForm todoId={todoId} />
      </div>
    );
  };
};