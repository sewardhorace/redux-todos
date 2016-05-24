import { createSelector } from 'reselect';
import { NAME } from './constants';
import { filterActive, filterCompleted } from './model';

export const getAll = state => state[NAME];

//compose built into ES6??
// const compose = (...args) => args.reduceRight((x,fn) => fn(x));
export const getCompleted = compose(filterCompleted, getAll);

export const getActive = compose(filterActive, getAll);

export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
);
