import React, { useState, useRef } from 'react'
//
const Todo = props => {
    const [title, setTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)
    const listEl = useRef(null)

    const handleEdit = e => {
        e.stopPropagation()
        setEdit(!edit)
    }

    const handleDelete = e => {
        e.stopPropagation()
        props.onDelete(listEl.current.id)
    }

    const handleBlur = () => {
        props.onUpdate(listEl.current.id, title)
        setEdit(false)
    }

    const renderItem = () => (
        <div className="d-flex justify-content-between">
            <div onClick={handleEdit} className="btn flex-fill text-left">
                {title}
            </div>
            <div onClick={handleDelete} className="btn btn-outline-dark">
                X
            </div>
        </div>
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

    return (
        <div
            id={props.id}
            ref={listEl}
            className="list-group-item list-group-item-action "
        >
            {edit ? renderEdit() : renderItem()}
        </div>
    )
}
export default Todo
