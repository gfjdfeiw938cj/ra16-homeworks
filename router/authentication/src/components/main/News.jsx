import { useEffect, useState} from 'react'
import {useAuth} from '../../hooks/useAuth'
import { Link } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([])
  const {token} = useAuth()

  useEffect(() => {
    fetch('http://localhost:7070/private/news', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
      .then((response) => response.json())
      .then(res => setNews(res))
      .catch((error) => {
        console.log(error.response)
      });
  }, [token])


  return (
    news && <div className={'row'}>
      {news.map(item => <div key={item.id} className="col-6 mb-3">
        <div className="card">
          <img src={item.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h2 className="card-title"><Link to={`/news/${item.id}`}>{item.title}</Link></h2>
            <p className="card-text">{item.content}</p>
          </div>
        </div>
      </div>)}
    </div>
  )
}
