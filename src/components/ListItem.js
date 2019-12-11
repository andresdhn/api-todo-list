import React, { Component } from 'react'

class ListItem extends Component {
    handleClick = e => {
        this.props.onSelected(e.target.id)
    }

    render() {
        return (
            <div
                id={this.props.id}
                className="List__item"
                onClick={this.handleClick}
            >
                {this.props.name}
            </div>
        )
    }
}

export default ListItem
