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

    render() {
        return (
            <div className="List__form">
                <input
                    className="form__control"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}
export default ListForm
