import React from 'react';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      done: false
    };
  };

  render() {
    return(
      <div className='step-form'>
        <label>Title: 
          <input type='text' placeholder='step1'></input>
        </label>
        <label>Body: 
          <input type='text' placeholder='do the first thing'></input>
        </label>
        <button >Toggle</button>
        <button>Delete Step</button>
      </div>
    )
  }
};