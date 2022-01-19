import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
      {
        props.list.map((todo)=>{
          return <TodoItem item={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}
