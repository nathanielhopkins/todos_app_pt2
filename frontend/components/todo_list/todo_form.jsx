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

  render() {
    return(
      <div className='todo-form'>
        <label for='title'>Title:</label>
        <input type='text' name='title' placeholder='pet the dog' />

        <label for='body'>Body:</label>
        <input type='text' name='body' placeholder="because he's a good boy" />

        <input type='text'></input>
        <input type='button' value='Add Tags' placeholder='Add a new tag' />

        <input type='submit' value='Create Todo!' />
      </div>
    );
  }
}