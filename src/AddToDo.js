import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addToDo} from './Actions';

class AddToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addToDo(this.state.inputText));
    this.setState({inputText:''});
  }

  handleChange(e) { 
    let inputText = e.target.value;
    this.setState({inputText:inputText});
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputText} onChange={this.handleChange} autoFocus />
        <input type="submit"/>
        </form>
    );
  }
}
AddToDo = connect()(AddToDo);

export default AddToDo;