import React, { Component } from 'react';
import '../styles/TodoListItem.css';
import propTypes from 'prop-types';

class TodoListItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="TodoListItem">
        <li> { this.props.name }</li>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  name: propTypes.string.isRequired
}

export default TodoListItem;
