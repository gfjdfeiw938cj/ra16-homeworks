import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { addAction } from "../redux/productsSlice";

export default function Form() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [specialPrice, setSpecialPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('')
  const [priceMessage, setPriceMessage] = useState('')
  const [specialPriceMessage, setSpecialPriceMessage] = useState('')
  const [descriptionMessage] = useState('')
  const [categoryMessage] = useState('')

  const dispatch = useDispatch();

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

    dispatch(addAction({title, price, specialPrice, status: ''}));

    setTitle('');
    setPrice('');
    setSpecialPrice('');
    setMessage('')
    setPriceMessage('')
    setSpecialPriceMessage('')
  };

  return (
    <form className="form mb-3" onSubmit={onSubmit}>
      <div className="row mb-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
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
          <input
            type="text"
            className="form-control"
            placeholder="Add special price"
            value={specialPrice}
            onChange={(event) => setSpecialPrice(event.target.value)}
          ></input>
          {specialPriceMessage && <div className="message">{specialPriceMessage}</div>}
        </div>
        <div className="col-auto">
          <select value={category} className="form-select" onChange={(event) => setCategory(event.target.value)}>
            <option value='' disabled>Select</option>
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
          </select>
          {categoryMessage && <div className="message">{categoryMessage}</div>}
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add special price"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          ></input>
        </div>
        <div className="col-auto">
          <button className="btn btn-success">
            Add
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea value={description} className="form-control" onChange={(event) => setDescription(event.target.value)}></textarea>
          {descriptionMessage && <div className="message">{descriptionMessage}</div>}
        </div>
      </div>

    </form>
  );
}
