import t from './actionTypes';
import { State } from './model';

// const initialState: State = [{
//   text: 'Use Redux',
//   completed: false,
//   id: 0
// }];
//
// export (state = initialState, action: any): State => {
//   switch (action.type) {
//     case t.ADD:
//       return [
//         // ...
//       ];
//     // ...
//   }
// };



export (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      return [
       ...state,
       todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};
