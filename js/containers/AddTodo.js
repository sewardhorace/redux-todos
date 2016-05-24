//not necessarily a container component, but is inseperable from its behavior

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  //functional component style doesn't support instances (i.e. this.input), so use a local variable
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo = connect()(AddTodo);
//default behavior of 'connect':
//connect()(Component); is like connect(null, null)(Component); it passes no state, and passes the dispatch function available by destructuring as { dispatch }


export default AddTodo;
