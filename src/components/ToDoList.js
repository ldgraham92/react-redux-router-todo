import React from 'react';
import { connect } from 'react-redux';
import { removeToDo } from '../actions/todos';

function ToDoList(props) {
    return (
        <>
            <h2>
                To-Do List:
            </h2>
            <ul>
                {props.toDos.map( ( toDo ) => {
                    return (
                        <li key={toDo.id}>
                        {toDo.task}
                        <button onClick ={ event => props.dispatch (removeToDo (toDo.id))}>
                            Complete To-Do
                        </button>
                        </li>
                    ); }
                )}
            </ul>
        </>
    );
}



export default connect(
    state => ( { toDos: state } )
)(ToDoList);