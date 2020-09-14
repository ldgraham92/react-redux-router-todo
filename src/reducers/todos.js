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
          task: action.payload
        }
        // Create a COPY of the original state array.
        const newToDoList = [...state];
        // Add the new task to the new array.
        newToDoList.push( newTask );
        // Return the updated state (overwrites the state.)
        return newToDoList;
      // By default, make no change... (if the action type...
      // doesn't match.)
      default:
        return state;
    }
  }
  
  // Don't forget to export!
  export default toDosReducer;