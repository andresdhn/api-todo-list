import React, { Component } from 'react'
import List from './List'
//
class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            completed: [],
        }
    }

    updateList = data => {
        let completed = data.filter(todo => todo.completed !== true)
        let todos = data.filter(todo => todo.completed === true)

        this.setState({ todos: todos, completed: completed })
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10')
            .then(res => res.json())
            .then(json => this.updateList(json))
    }

    render() {
        return (
            <div id="app" className="mt-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-6">
                            <List title="Todo" items={this.state.todos} />
                        </div>
                        <div className="col col-md-6">
                            <List
                                title="Completed"
                                items={this.state.completed}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
