import React, { Component } from 'react';
import '../styles/TodoList.css';
import propTypes from 'prop-types'

import TodoListItem from './TodoListItem'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items
    }
  }
  componentWillReceiveProps(nextProps){
    // lo utilizamos cuando usamos como variable de estado nuestra prop
    if(nextProps.length !== this.state.items.length){
      // si hay un nuevo elemento...
      this.setState({ items: nextProps.items})
    }
  }
  render() {
    let items = this.state.items.map((currentValue, index, array)=>{
      return(
        <TodoListItem name = { currentValue } key = { index }/>
      )
    })
    return (
      <div className="TodoList">
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
    items: propTypes.array.isRequired
}

export default TodoList;
