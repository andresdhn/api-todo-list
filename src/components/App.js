import React, { Component } from 'react'
import './App.scss'
//
import List from './List'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [{ id: 1, name: 'uno' }],
            completed: [],
        }
    }

    handleSelectedTodo = id => {
        let selectedItem = this.state.todos.filter(
            item => parseInt(item.id) === parseInt(id)
        )
        this.setState({
            todos: this.state.todos.filter(
                item => parseInt(item.id) !== parseInt(id)
            ),
            completed: [...selectedItem],
        })
    }

    handleSelectedCompleted = id => {
        let selectedItem = this.state.completed.filter(
            item => parseInt(item.id) === parseInt(id)
        )
        this.setState({
            todos: [...selectedItem],
            completed: this.state.completed.filter(
                item => parseInt(item.id) !== parseInt(id)
            ),
        })
    }

    handleNewTodo = name => {
        let newTodos = this.state.todos
        let newItem = {
            id: this.state.todos.length,
            name: name,
        }

        newTodos.push(newItem)
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <List
                        title="Todos"
                        form={true}
                        listItems={this.state.todos}
                        onSelected={this.handleSelectedTodo}
                        onSubmited={this.handleNewTodo}
                    />
                    <List
                        title="Completed"
                        listItems={this.state.completed}
                        onSelected={this.handleSelectedCompleted}
                    />
                </div>
            </div>
        )
    }
}

export default App
