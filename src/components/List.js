import React from 'react'
import Todo from './Todo'
//
const List = props => {
    return (
        <div className="list">
            <h3>{props.title}</h3>
            <div className="list-group">
                {props.items &&
                    props.items.map(todo => (
                        <Todo id={todo.id} key={todo.id} title={todo.title} />
                    ))}
            </div>
        </div>
    )
}
export default List
