import React from 'react';
import { connect } from 'react-redux';

function ToDoList(props) {
    return (
        <>
            <h2>
                To-Do List:
            </h2>
            <ul>
                {props.toDos.map( ( toDo, index ) => <li key={index}>{toDo.task}</li> )}
            </ul>


        </>
    );
}



export default connect(
    state => ( { toDos: state } )
)(ToDoList);