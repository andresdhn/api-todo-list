import React, { Component } from 'react'

class ListForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
        }
    }

    handleChange = e => {
        this.setState({ title: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmited(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <form
                className="List__form"
                onSubmit={this.handleSubmit.bind(this)}
            >
                <input
                    className="form__control"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                />
            </form>
        )
    }
}
export default ListForm
