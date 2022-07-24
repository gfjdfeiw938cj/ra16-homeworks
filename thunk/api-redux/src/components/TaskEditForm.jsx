import {fetchServiceById, updateServices } from "../thunks/serviceThunk";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {
  Link
} from "react-router-dom";

export default function TaskEditForm() {

  let { id } = useParams();
  id = +id

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.services)
  const loading = useSelector(state => state.tasks.loading)
  const error = useSelector(state => state.tasks.error)
  const goodToGo = useSelector(state => state.tasks.goodToGo)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const goName = name ? name : task.name
    const goPrice = price ? price : +task.price
    const goContent = content ? content : task.content
    dispatch(updateServices({id, name: goName, price: goPrice, content: goContent}))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : name === "price" ? setPrice(value) : setContent(value)
  }

  useEffect(() => {
    dispatch(fetchServiceById(id));
  },[dispatch, id])

  return (
    <>
      {goodToGo && navigate('/ra16-thunk-api-redux/services')}
      {error && <div className="alert alert-danger">{error}</div>}
      {loading === 'pending' ? <div className="spinner"></div> :
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input onChange={handleChange} type="text" placeholder="name" name="name" value={name ? name : task.name} className="form-control" />
        </div>
        <div className="mb-3">
          <input onChange={handleChange} placeholder="price" type="text" name="price" value={price ? price : task.price} className="form-control" />
        </div>
        <div className="mb-3">
          <input onChange={handleChange} placeholder="content" type="text" name="content" value={content ? content : task.content} className="form-control" />
        </div>
        <div>
          <Link to="/ra16-thunk-api-redux/services" className="btn btn-danger me-1" type="submit">Cancel</Link>
          <button className="btn btn-primary" type="submit" onClick={(e) => handleSubmit(e)}>Save</button>
        </div>
      </form> }
    </>
    )
}
