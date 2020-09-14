import {v4 as uuidv4} from 'uuid';

/**
 * Redux Reducer(s)
 * A reducer will actually carry out the request or
 * data mutation. It is expecting an "action" to be
 * passed that matches a type programmed-in.
 */

// Typically we'll see 2 parameters:
// 1) state (default value.)
// 2) action (the request being sent.)
const toDosReducer = ( state = [], action ) => {
    // Which action is this? What should we do!?
    switch ( action.type ) {
      // If this is the ADD NEW action...
      case 'ADD_NEW_TO_DO':
        // Prepare a new task object.
        const newTask = {
          id: uuidv4(),
          task: action.payload
        }
        // Create a COPY of the original state array.
        const newToDoList = [...state];
        // Add the new task to the new array.
        newToDoList.push( newTask );
        // Return the updated state (overwrites the state.)
        return newToDoList;
      case 'REMOVE_TO_DO':
          // Note: the Array.filter() method returns an UPDATED COPY of the array.
          const updatedToDoList = state.filter( // filter() takes a function as an argument.
              toDo => toDo.id !== action.payload // The array will be composed only of items that do NOT have the ID we passed.
          );
          //Return / overwrite the state with this new array of To-Dos.
          return updatedToDoList;
      // By default, make no change... (if the action type...
      // doesn't match.)
      default:
        return state;
    }
  }
  
  // Don't forget to export!
  export default toDosReducer;