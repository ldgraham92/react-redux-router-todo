import React, {useState} from 'react';

function ToDos(){

    const [newTask, setNewTask] = useState('');

    return(
        <>
            <h2>To-Do Form</h2>
            <form>
                <label htmlFor='task'>Enter New Task:</label>
                <input id='task' type='text' placeholder='Enter Task' value={newTask} onChange={event => {setNewTask(event.target.value);}}/>
                <input type='submit' value='Add New To Do' />                
            </form>
            <ul>
                
            </ul>
        </>
    );
}






export default ToDos;