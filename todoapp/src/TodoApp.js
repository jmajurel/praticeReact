import React, { Component } from 'react';
import './TodoApp.css';

import TodoList from './TodoList';

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: [], textInput: ""}
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e){
    this.setState({textInput: e.target.value});
  }

  submitForm(e){
    e.preventDefault();

    this.setState((prevState, props) => ({
      todos: [...this.state.todos, this.state.textInput],
      textInput: ""
    }))
  }

  render() {
    return (
      <div className="TodoApp">
        <h1>Welcome to the TodoApp</h1>
	<form onSubmit={this.submitForm} className="TodoControl">
	  <input type="text" onChange={this.handleChange} value={this.state.textInput}/>
	  <input type="submit" />
	</form>
	<TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;
