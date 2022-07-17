import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { filterAction } from "../redux/productsSlice";

export default function Filter() {
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();

  const onSearch = (event) => {
    event.preventDefault();
    dispatch(filterAction({keyword}));
  };

  const onClear = (event) => {
    event.preventDefault();
    setKeyword('')
    dispatch(filterAction(''));
  }

  return (
    <form className="form" onSubmit={onSearch}>
      <div className="row">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Keyword"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          ></input>
        </div>
        <div className="col-auto">
          <button className="btn btn-success">Search </button>
        </div>
        {(keyword && <div className="col-auto">
          <button className="btn btn-warning" onClick={onClear}>Clear</button>
        </div>) }
      </div>

    </form>
  );
}
