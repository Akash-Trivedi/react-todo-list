import { Button } from 'bootstrap';
import React from 'react';

export default function NewTodo() {
  const [itemObject, modifyItem]= React.useState({
    title: "",
    desc:""
  });

  function modifyFormData(event){
    modifyItem(prevObject=>{
      return {
        ...prevObject,
        [event.target.name]: event.target.value
      }
    })
  }

  function newItemHandler(event){
    
    console.log(itemObject)
  }

  return (
    <div className='container'>
      <form onSubmit={newItemHandler}>
        <div className="input-group mb-3">
        <input type="text" name='title' onChange={modifyFormData} className="form-control" placeholder="task heading" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div>
          <textarea name='desc' placeholder="description" onChange={modifyFormData} className="form-control" aria-label="With textarea"/>
        </div>
          <button className='btn btn-info'>{`add new item`}</button>
      </form>
    </div>
  );
}
