import React, {useState} from 'react';
import {connect} from 'react-redux';

function ToDos( props ){
    // Local state to keep track of this components form field
    const [newTask, setNewTask] = useState('');

    // Add a submit function.
    const submitToDo = event => {
        event.preventDefault(); // Stop the page from reloading!
    }

    return(
        <>
            <h2>To-Do Form</h2>
            <form onSubmit={submitToDo}>
                <label htmlFor='task'>Enter New Task:</label>
                <input id='task' type='text' placeholder='Enter Task' value={newTask} onChange={event => {setNewTask(event.target.value);}}/>
                <input type='submit' value='Add New To Do' />                
            </form>
            <ul>
                
            </ul>
        </>
    );
}






export default connect(
    // We set up a 'mapStateToProps' function/relationship
    // The parameter / arguement is from your Redux store.
    // Basically what you return gets tacked on to your component props. Think: props.toDos for example.
    state => { return { toDos: state }}
)(ToDos);