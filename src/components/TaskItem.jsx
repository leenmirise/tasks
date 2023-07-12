import React, {useState} from 'react';
import style from "./styles/content.module.css";

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
                {isEditing
                    ? (
                        <div  className={style.task}>
                            <div>
                                <strong>{props.number}</strong>
                                <input
                                    type='text'
                                    value={editedText}
                                    onChange={e => setEditedText(e.target.value)}
                                    className={style.inputs}
                                />
                            </div>
                            <div>
                                <button onClick={saveClick} className={style.buttons}>Save</button>
                                <button onClick={cancelClick} className={style.buttons}>Cancel</button>
                            </div>
                        </div>
                    )
                    : (
                        <div className={style.task}>
                            <div>
                                <strong>{props.number}</strong>
                                <label>
                                    <input type='checkbox' id={props.task.id} checked={isChecked} onChange={checkboxChange} />
                                    <span style={textStyle}>{props.task.todo}</span>
                                </label>
                            </div>
                            <div>
                                <button onClick={() => setIsEditing(true)} className={style.buttons}>Edit</button>
                                <button onClick={() => props.remove(props.task)} className={style.buttons}>Delete</button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default TaskItem;