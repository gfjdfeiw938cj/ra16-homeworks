import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then(request => request.json())
      .then(response => setPosts(response))
  })

  return (
    <section>
      <Link to="/posts/new">Добавить пост</Link>
      {posts && posts.map(item => <div key={item.id}><Link to={`/posts/${item.id}`}>{item.content}</Link></div>)}
    </section>
  )
}
