import React from 'react'

export default function Todo(props) {
  return (
    <div className="accordion" id={props.item.id}>
      <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {props.item.title}
        </button>
      </h2>
      <div id={props.item.id} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {props.item.desc}
        </div>
      </div>
      </div>
    </div>
  )
}