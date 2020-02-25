import React from 'react'
import Todo from './Todo'
//
const List = props => {
    return (
        <div className="list">
            <div className="list-group">
                {props.items &&
                    props.items.map(todo => (
                        <Todo
                            id={todo.id}
                            key={todo.id}
                            title={todo.title}
                            onUpdate={props.onUpdate}
                            onDelete={props.onDelete}
                        />
                    ))}
            </div>
        </div>
    )
}
export default List
