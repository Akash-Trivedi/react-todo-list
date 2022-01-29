// import { Button } from 'bootstrap';
import React from 'react';
/*
if title and desc are empty then for two consecutive add creates warning for same key 
i.e. sno
 */
export default function NewTodo(props) {

  const [itemObject, modifyNewItem] = React.useState({
    sno: 0,
    title: "",
    desc: ""
  });

  function modifyFormData(event) {
    modifyNewItem(prevObject => {
      return {
        ...prevObject,
        [event.target.name]: event.target.value
      }
    })
  }

  function addNewItem(event) {
    event.preventDefault() // stops whole page from reloading, which will loose the data
    if (itemObject.title !== "") {
      itemObject.sno = props.list.length + 1 //+1 beacuse numbering starts from 1
      props.fun(prevObject => [itemObject, ...prevObject])
      // new item in latest
    }
  }

  return (
    <div className='container'>
      <form onSubmit={addNewItem}>
        <div className="input-group mb-3">
          <input type="text" name='title' onChange={modifyFormData} className="form-control" placeholder="task heading" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div>
          <textarea name='desc' placeholder="description" onChange={modifyFormData} className="form-control" aria-label="With textarea" />
        </div>
        <input className='btn btn-info' value='add new item' type='submit' />
      </form>
    </div>
  );
}
