import React from 'react'

export default function Todo(props) {
  let array1 = []
  /*want to move button to far right in the accordian-header */
  function removeItem(sno) {

    for (let index = 0; index < props.props1.list.length; index++) {
      if (props.props1.list[index].sno !== sno) {
        array1.push(props.props1.list[index])
      }
    }
    props.props1.fun(array1)
  }

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={props.item.sno}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {props.item.title}
        </button>
      </h2>
      <div id={props.item.id} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <button className='btn btn-danger btn-sm' style={{ marginLeft: "10rm" , display:"block"}} onClick={() => removeItem(props.item.sno)}>remove</button>
        {props.item.desc}
        </div>
      </div>
    </div>
  )
}