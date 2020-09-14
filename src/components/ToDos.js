import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addNewToDo } from '../actions/todos';

function ToDos( props ){
    // Local state to keep track of this components form field
    const [newTask, setNewTask] = useState('');

    // Add a submit function.
    const submitToDo = event => {
        event.preventDefault(); // Stop the page from reloading!
        // 1) We get our task from local state...
        // 2) pass it to our action to format a request...
        // 3) the reducer understands this  and...
        // 4) updates our store!
        // * Because of connect() and <Provider>, we have access to dispatch()...
        //   via our "props" for this component.
        props.dispatch(addNewToDo( newTask ));
    }

    return(
        <>
            <h2>Add To-Dos</h2>
            <form onSubmit={submitToDo}>
                <label htmlFor='task'>Enter New Task:</label>
                <input id='task' type='text' placeholder='Enter Task' value={newTask} onChange={event => {setNewTask(event.target.value);}}/>
                <input type='submit' value='Add New To Do' />                
            </form>
        </>
    );
}






export default connect(
    // We set up a 'mapStateToProps' function/relationship
    // The parameter / arguement is from your Redux store.
    // Basically what you return gets tacked on to your component props. Think: props.toDos for example.
    state => { return { toDos: state }}
)(ToDos);