import React from 'react'

export default function Todo(props) {
  return (
    <div className="container">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.description}</p>
          {/* <button href="#" className="btn btn-sm btn-danger" onClick={props.onDelete(props.item.srno)}>Delete</button> */}
          {/* when onDelete(argument) arg passed then on rendering the function is itself called. so use arrow function */}
          <button href="#" className="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.item.srno)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
