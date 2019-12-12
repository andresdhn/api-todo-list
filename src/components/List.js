import React, { Component } from 'react'
import './List.scss'
import ListItem from './ListItem'
import ListForm from './ListForm'

class List extends Component {
    handleSelected = id => {
        this.props.onSelected(id)
    }

    handleNewItem = name => {
        this.props.onSubmited(name)
    }

    render() {
        return (
            <div className="List">
                <div className="List__title">
                    <h2>{this.props.title}</h2>
                    {this.props.form && (
                        <ListForm onSubmited={this.handleNewItem} />
                    )}
                </div>
                <div className="List__content">
                    {this.props.listItems &&
                        this.props.listItems.map(item => {
                            return (
                                <ListItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    onSelected={this.handleSelected}
                                />
                            )
                        })}
                </div>
            </div>
        )
    }
}
export default List
