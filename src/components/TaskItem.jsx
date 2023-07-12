import React, {useState} from 'react';

const TaskItem = (props) => {

    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.task.todo);

    const checkboxChange = () => {
        setIsChecked(!isChecked);
    };

    const textStyle = {
        textDecoration: isChecked
            ? 'line-through'
            : 'none',
        color: isChecked
            ? 'gray'
            : 'black'
    };

    const saveClick = () => {
        //props.edit(props.task, editedText);
        props.update(props.task, editedText)
        setIsEditing(false);
    };

    const cancelClick = () => {
        setEditedText(props.task.todo);
        setIsEditing(false);
    };

    return (
        <div>
            <div>
                <strong>{props.number}</strong>
                {isEditing
                    ? (
                        <div>
                            <input type='text' value={editedText} onChange={e => setEditedText(e.target.value)} />
                            <button onClick={saveClick}>Save</button>
                            <button onClick={cancelClick}>Cancel</button>
                        </div>
                    )
                    : (
                        <label>
                            <input type='checkbox' id={props.task.id} checked={isChecked} onChange={checkboxChange} />
                            <span style={textStyle}>{props.task.todo}</span>
                        </label>
                    )}
            </div>
            <div>
                {isEditing
                    ? null
                    : (
                        <div>
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                            <button onClick={() => props.remove(props.task)}>Delete</button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default TaskItem;