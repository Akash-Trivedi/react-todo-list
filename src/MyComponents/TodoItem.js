import React from 'react'

export default function Todo(props) {
  let array1 = []
  /*want to move button to far right in the accordian-header */
  function removeItem() {
    for (let index = 0; index < props.list.length; index++) {
      if (props.list[index].sno !== props.sno) {
        array1.push(props.list[index])
      }

    }
    props.list.fun(props.list)
  }

  return (
    <div className="accordion" id={props.item.id}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={props.item.sno}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {props.item.title}
          </button>
        </h2>
        <div id={props.item.id} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <button className='btn btn-tranparent btn-sm' style={{ marginLeft: "10rm" }} onClick={() => removeItem(props.sno)}>remove</button>
            {props.item.desc}
          </div>
        </div>
      </div>
    </div>
  )
}