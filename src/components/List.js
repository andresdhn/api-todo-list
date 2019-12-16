import React, { Component } from 'react'
import './List.scss'
import ListItem from './ListItem'
import ListForm from './ListForm'

class List extends Component {
    handleSelected = id => {
        this.props.onSelected(id)
    }

    handleNewItem = title => {
        this.props.onSubmited(title)
    }

    render() {
        return (
            <div
                className={`List ${
                    this.props.name === 'Completed' ? 'List--completed' : ''
                }`}
            >
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
                                    title={item.title}
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
