import React, { useState } from 'react'
//
const Form = props => {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (newTodo.length > 0) {
            props.onNewTodo(newTodo)
            setNewTodo('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-success">
                        Add
                    </button>
                </span>
            </div>
        </form>
    )
}
export default Form
