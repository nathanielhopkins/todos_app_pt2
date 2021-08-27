import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      title: '',
      body: '',
      newTag: '',
      tags: []
    }

    this.receiveTodo = this.props.receiveTodo;
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTags = this.updateTags.bind(this);
    this.updateNewTag = this.updateNewTag.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateTitle(event) {
    this.setState({ title: event.currentTarget.value });
  }

  updateBody(event) {
    this.setState({ body: event.currentTarget.value });
  }

  updateNewTag(event) {
    this.setState({ newTag: event.currentTarget.value });
  }

  updateTags(event) {
    let newTags = Array.from(this.state.tags);
    newTags.push(this.state.newTag);
    this.setState({ newTag: '' });
    this.setState({ tags: newTags });
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      title: '',
      body: '',
      newTag: '',
      tags: []
    })
  }

  render() {
    return(
      <div className='todo-form'>
        <label>Title:
        <input type='text' 
          id='title' 
          placeholder='pet the dog' 
          value={this.state.title}
          onChange={this.updateTitle}
          /></label>

        <label>Body:
        <input type='text' 
          id='body' 
          placeholder="because he's a good boy" 
          value={this.state.body}
          onChange={this.updateBody}
          /></label>

        <input type='text' 
          value={this.state.newTag}
          onChange={this.updateNewTag}
          ></input>
        <input type='button' 
          value='Add Tags' 
          placeholder='Add a new tag'
          onClick={this.updateTags} 
          />

        <input type='submit' 
        value='Create Todo!' 
        onClick={this.submitForm}
        />
      </div>
    );
  }
}