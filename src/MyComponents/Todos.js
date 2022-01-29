import React from 'react'
import TodoItem from './TodoItem'
import EmptyTodo from './EmptyTodo'

export default function Todos(props) {

  return (
    <div className='container'>
      <div className="accordion" id="accordionExample">
        {props.list.length === 0 ? <EmptyTodo /> :
          props.list.map((todo) => {
            return <TodoItem props1={props} item={todo} key={todo.sno} />
          })
        }
      </div>
    </div>
  )
}