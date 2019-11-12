import React from 'react';

const Task = props => {
    const taskClasses = ['task-card'];

    if (props.isDone) {
        taskClasses.push('done')
    }

    return (
        <div className={taskClasses.join(' ')}>
            <p className="task-text">{props.text}</p>
            <div className="task-actions">
                <span className="task-status">status: {props.isDone ? 'Done' : 'in Process'}</span>
                <label className="task-checkbox">
                    <input type="checkbox"
                           checked={props.isDone}
                           onChange={props.onChangeStatus}
                    />
                    Closed
                </label>
                <button onClick={props.onRemoveTask}
                        className="btn task-btn"
                >Delete</button>
            </div>
        </div>
    );
};

export default Task;
