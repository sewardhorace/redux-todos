import { testAddTodo } from './addTodo';
import { testToggleTodo } from './toggleTodo';

const runTests = () => {
  testAddTodo();
  testToggleTodo();
  console.log("All Tests Passing");
};

export default runTests;
