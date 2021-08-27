import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      title: '',
      body: '',
      tags: []
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTags = this.updateTags.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateTitle(event) {
    this.setState({ title: event.currentTarget.value });
  }

  updateBody(event) {
    this.setState({ body: event.currentTarget.value });
  }

  updateTags(event) {
    let newTags = Array.from(this.state.tags);
    newTags.push(event.currentTarget.value);
    this.setState({ tags: newTags });
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div className='todo-form'>
        <label for='title'>Title:</label>
        <input type='text' 
          name='title' 
          placeholder='pet the dog' 
          value={this.state.title}
          onChange={this.updateTitle}
          />

        <label for='body'>Body:</label>
        <input type='text' 
          name='body' 
          placeholder="because he's a good boy" 
          value={this.state.body}
          onChange={this.updateBody}
          />

        <input type='text'></input>
        <input type='button' 
          value='Add Tags' 
          placeholder='Add a new tag' 
          />

        <input type='submit' 
        value='Create Todo!' 
        onClick={this.submitForm}
        />
      </div>
    );
  }
}