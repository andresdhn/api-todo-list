import React, { useState, useRef } from 'react'
//
const Todo = props => {
    const [title, setTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)
    const listEl = useRef(null)

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        props.onDelete(listEl.current.id)
    }

    const handleComplete = () => {
        props.onComplete(listEl.current.id)
    }

    const handleUpdate = () => {
        props.onUpdate(listEl.current.id, title)
        setEdit(false)
    }

    const renderItem = () => (
        <div className="d-flex justify-content-between">
            <div
                onClick={handleComplete}
                className={`btn ${
                    props.completed ? 'btn-outline-dark' : 'btn-outline-primary'
                }`}
            >
                &#10003;
            </div>
            <div onClick={handleEdit} className="btn flex-fill text-left">
                {title}
            </div>
            <div onClick={handleDelete} className="btn btn-outline-danger">
                X
            </div>
        </div>
    )

    const renderEdit = () => (
        <input
            autoFocus
            onChange={e => setTitle(e.target.value)}
            value={title}
            onBlur={handleUpdate}
            className="form-control"
        />
    )

    return (
        <div
            id={props.id}
            ref={listEl}
            className={`list-group-item list-group-item-action ${
                props.completed ? 'list-group-item-secondary' : ''
            }`}
        >
            {edit ? renderEdit() : renderItem()}
        </div>
    )
}
export default Todo
