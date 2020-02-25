import React, { useState } from 'react'
import List from './List'
import Form from './Form'
//
function App() {
    const [todos, setTodos] = useState([])

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

    const handleComplete = id => {
        let newTodos = todos.map(todo => {
            if (Number(todo.id) === Number(id)) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <div id="app" className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-gray">
                            <div className="card-body">
                                <h3>To-Dos</h3>
                                <Form onNewTodo={handleSubmit} />
                                <br />
                                <List
                                    items={todos}
                                    onUpdate={handleUpdate}
                                    onDelete={handleDelete}
                                    onComplete={handleComplete}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
