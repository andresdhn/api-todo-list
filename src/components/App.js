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

    updateLists = (todos, completed) => {
        this.setState({ todos: todos, completed: completed })
    }

    handleSelected = id => {
        let selectedItem = this.state.todos.filter(
            item => parseInt(item.id) === parseInt(id)
        )

        let newTodos = this.state.todos.filter(
            item => parseInt(item.id) !== parseInt(id)
        )

        let newCompleted = this.state.completed
        newCompleted.push({
            id: this.state.completed.length + 1,
            name: selectedItem[0].name,
        })

        this.updateLists(newTodos, newCompleted)
    }

    handleNewTodo = name => {
        let newTodos = this.state.todos
        let newItem = {
            id: this.state.todos.length + 1,
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
                        onSelected={this.handleSelected}
                        onSubmited={this.handleNewTodo}
                    />
                    <List
                        title="Completed"
                        listItems={this.state.completed}
                        onSelected={this.handleSelected}
                    />
                </div>
            </div>
        )
    }
}

export default App
