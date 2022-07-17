import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addAction, changeAction } from "../redux/tasksSlice";

export default function Form() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('')
  const [priceMessage, setPriceMessage] = useState('')
  const [editing, setEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    const editing = tasks.filter(task => task.status === 'editing')
    if(editing.length > 0) {
      setEditing(true)
      setEditingId(editing[0].id)
      setTitle(editing[0].title);
      setPrice(editing[0].price);
    } else {
      setTitle('');
      setPrice('');
    }
  }, [tasks])

  const onSubmit = (event) => {
    event.preventDefault();


    if(title.trim().length === 0) {
      setMessage('Empty input is forbidden')
      setTitle('');
      return;
    }

    if(!/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(price.trim())) {
      setPriceMessage('Price should be digits')
      return;
    }

    if(editing) {
      dispatch(changeAction({editingId, title, price, status: ''}));
    } else {
      dispatch(addAction({title, price, status: ''}));
    }

    setTitle('');
    setPrice('');
    setMessage('')
    setPriceMessage('')
  };

  const onCancel = () => {
    setEditing(false)
    setTitle('')
    setPrice('')
  }

  return (
    <form className="form mb-3" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add task"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          {message && <div className="message">{message}</div>}
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          ></input>
          {priceMessage && <div className="message">{priceMessage}</div>}
        </div>
        <div className="col-auto">
          <button className="btn btn-success">
            {editing ? 'Save task' : 'Add task'}
          </button>
          {editing && <button className="btn btn-warning ms-2" onClick={onCancel}>Cancel</button>}
        </div>
      </div>

    </form>
  );
}
