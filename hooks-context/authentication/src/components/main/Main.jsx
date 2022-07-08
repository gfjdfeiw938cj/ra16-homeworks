import {useContext} from 'react'
import AuthContext from "../../contexts/AuthContext";
import Welcome from "./Welcome"
import News from "./News"

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className={'container'}>
      {isAuthenticated ? <News/> : <Welcome/>}
    </div>
  )
}
