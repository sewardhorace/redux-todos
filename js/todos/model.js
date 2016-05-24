export type Todo = {
  id?: number;
  text: string;
  completed: boolean;
};

// This is the model of our module state (e.g. return type of the reducer)
export type State = Todo[];

// Some utility functions that operates on our model
export const filterCompleted = todos => todos.filter(t => t.completed);

export const filterActive = todos => todos.filter(t => !t.completed);
