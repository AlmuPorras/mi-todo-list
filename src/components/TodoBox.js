import React, { Component } from 'react';
import '../styles/TodoBox.css';
import propTypes from 'prop-types';

class TodoBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(e);
    this.setState({todoText:''});
  }
  getInputValue(){
    return this.state.todoText;
  }

  render() {
    return (
      <div className="TodoBox">
        <form onSubmit={ this.onSubmit }>
          <input
            className="TodoBox-input"
            type = "text"
            value = { this.state.todoText }
            onChange = { (e)=>{ this.setState({ todoText:e.target.value }) } }/>
          <input className="TodoBox-button" type = "submit" value = "Agregar"/>
        </form>
      </div>
    );
  }
}

TodoBox.propTypes = {
  onSubmit: propTypes.func.isRequired
}

export default TodoBox;
