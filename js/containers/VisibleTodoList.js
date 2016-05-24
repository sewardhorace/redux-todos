import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../selectors';
import TodoList from '../components/TodoList';

//any props that require state
const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  };
};
//any props (functions) that require the dispatch method
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
