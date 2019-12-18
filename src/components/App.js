import React, { Component } from 'react'
import './App.scss'
//
import List from './List'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            completed: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5')
            .then(response => response.json())
            .then(data => this.setState({ todos: data }))
            .catch(error => console.log(error))
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
            title: selectedItem[0].title,
        })

        this.updateLists(newTodos, newCompleted)
    }

    handleUncompleted = id => {
        let selectedItem = this.state.completed.filter(
            item => parseInt(item.id) === parseInt(id)
        )

        let newCompleted = this.state.completed.filter(
            item => parseInt(item.id) !== parseInt(id)
        )

        let newTodos = this.state.todos
        let newItem = {
            id: this.state.todos.length + 1,
            title: selectedItem[0].title,
        }
        newTodos.push(newItem)
        this.updateLists(newTodos, newCompleted)
    }

    handleNewTodo = title => {
        let newTodos = this.state.todos
        let newItem = {
            id: this.state.todos.length + 1,
            title: title,
        }

        newTodos.push(newItem)
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <List
                        name="Todos"
                        form={true}
                        listItems={this.state.todos}
                        onSelected={this.handleSelected}
                        onSubmited={this.handleNewTodo}
                    />
                    <List
                        name="Completed"
                        listItems={this.state.completed}
                        onSelected={this.handleUncompleted}
                    />
                </div>
            </div>
        )
    }
}

export default App
