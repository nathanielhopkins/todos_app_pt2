import React from 'react';

export default class StepList extends React.Component { 
  render() {
    const { stepsByTodoId, todoId } = this.props;
    const steps = stepsByTodoId(this.state, todoId);
    return(
      <div>
        <ul>
          {steps.map(step => <li><StepsListItemContainer step={step} /></li>)}
        </ul>
        <StepForm />
      </div>
    );
  };
};