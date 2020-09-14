import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';
import { Provider } from 'react-redux';
import ToDos from './components/ToDos';
import ToDoList from './components/ToDoList';

/**
 * Redux Store
 * Store is our global state. This is where all of our global data exists.
 * We pass in the reducer so it will know how to handle any actions (requests).
 */
const store = createStore(
  toDosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // If you want to use REDUX Devtools in browser this line must exist too.
);


// We can run instructions every time the state/store is updated by using the stores 'subscribe' method.
// It takes a function to execute its argument, we are using it to console.log() our current state each time that it experiences a change.
store.subscribe(() => console.log(store.getState()));

/**
 * Redux Dispatch:
 * This is what we use to send actions to our store's reducer.
 */
// Dispatch expects a properly formatted action...
// Otherwise your reducer wont know what do do!
store.dispatch(addNewToDo('Research Redux'));

// When using Redux, we use the <Provider> combined with a "store" prop to pass our global...
/// state info down to whereever we need it (Whichever component needs it)
ReactDOM.render(
  <Provider store={store}>
    <ToDos />
    <ToDoList />
  </Provider>,
  document.getElementById('root')
);


