import React, { useState, useEffect } from 'react'
import List from './List'
//
function App() {
    const [todos, setTodos] = useState([])
    const [completed, setCompleted] = useState([])

    const updateList = data => {
        let todos = data.filter(todo => todo.completed === true)
        let completed = data.filter(todo => todo.completed !== true)

        setCompleted(completed)
        setTodos(todos)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10')
            .then(res => res.json())
            .then(json => updateList(json))
    })

    return (
        <div id="app" className="mt-5">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-md-6">
                        <List title="Todo" items={todos} />
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
