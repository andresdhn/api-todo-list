import React, { useState } from 'react'
import List from './List'
import Form from './Form'
//
function App() {
    const [todos, setTodos] = useState([])
    const [completed, setCompleted] = useState([])

    const handleSubmit = todo => {
        setTodos([
            ...todos,
            { userId: 1, id: Date.now(), completed: false, title: todo },
        ])
    }

    const handleUpdate = (id, newTodo) => {
        let newTodos = todos.map(todo => {
            if (Number(todo.id) === Number(id)) {
                todo.title = newTodo
            }
            return todo
        })
        setTodos(newTodos)
    }

    const handleDelete = id => {
        let newTodos = todos.filter(todo => Number(todo.id) !== Number(id))
        setTodos(newTodos)
    }

    return (
        <div id="app" className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6">
                        <div className="card bg-gray">
                            <div className="card-body">
                                <h3>To-Dos</h3>
                                <Form onNewTodo={handleSubmit} />
                                <br />
                                <List
                                    items={todos}
                                    onUpdate={handleUpdate}
                                    onDelete={handleDelete}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6">
                        <List title="Completed" items={completed} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
