import React from 'react'
import TodoItem from './TodoItem'
import EmptyTodo from './EmptyTodo'
import TaskList from '../tasks'

export default function Todos(props) {
  const [taskList, modifyList]=React.useState(TaskList);

  return (
    <div className='container'>
      { taskList.length===0 ? <EmptyTodo/>:
        taskList.map((todo)=>{
          return <TodoItem item={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}
