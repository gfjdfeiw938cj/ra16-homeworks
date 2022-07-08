import {useContext, useEffect, useState} from 'react'
import AuthContext from "../../contexts/AuthContext";

export default function News() {
  const [news, setNews] = useState([])
  const {token} = useContext(AuthContext)

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
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">{item.content}</p>
          </div>
        </div>
      </div>)}
    </div>
  )
}
