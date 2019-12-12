import React, { Component } from 'react'

class ListForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
    }

    handleChange = e => {
        this.setState({ name: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmited(this.state.name)
    }

    render() {
        return (
            <form
                className="List__form"
                onSubmit={this.handleSubmit.bind(this)}
            >
                <input
                    className="form__control"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                />
            </form>
        )
    }
}
export default ListForm
