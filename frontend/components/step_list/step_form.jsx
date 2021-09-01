import React from 'react';

export default class StepForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      todoId: this.props.todoId,
      done: false
    };

    this.updateValue = this.updateValue.bind(this);
  };

  updateValue(e, key) {
    this.setState({key: e.currentTarget.value});
  }

  render() {
    return(
      <div className='step-form'>
        <label>Title: 
          <input type='text' 
            placeholder='step1' 
            value={this.state.title}
            onChange={(e) => this.updateValue(e, 'title')}>
            </input>
        </label>
        <label>Body: 
          <input type='text' 
            placeholder='do the first thing'
            value={this.state.body}
            onChange={(e) => this.updateValue(e, 'body')}></input>
        </label>
        <button >Toggle</button>
        <button>Delete Step</button>
      </div>
    )
  }
};