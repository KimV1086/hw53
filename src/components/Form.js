import React from 'react';

const AddTaskForm = props => (
    <div className="task-form">
        <input onChange={props.onInputTask}
               value={props.currentTaskText}
               type="text"
               placeholder="Add new task"
        />
        <button onClick={props.onAddTask}
               value="Add"
               className="btn btn-success"
        >Add</button>
    </div>
);

export default AddTaskForm;
