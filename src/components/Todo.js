import React, { useState } from 'react'
//
const Todo = props => {
    const [title, setTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const handleClick = () => setEdit(!edit)
    const handleBlur = () => setEdit(false)

    const renderItem = () => (
        <button
            id={props.id}
            onClick={handleClick}
            className="list-group-item list-group-item-action"
        >
            {title}
        </button>
    )

    const renderEdit = () => (
        <input
            autoFocus
            onChange={e => setTitle(e.target.value)}
            value={title}
            onBlur={handleBlur}
            className="form-control"
        />
    )

    return edit ? renderEdit() : renderItem()
}
export default Todo
