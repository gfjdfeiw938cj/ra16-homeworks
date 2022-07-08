import {useContext} from 'react'
import AuthContext from "../../contexts/AuthContext";
import LogoutForm from "./LogoutForm";
import LoginForm from "./LoginForm";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <header className="bg-light mb-4">
        <div className={'container d-flex flex-wrap justify-content-center py-3'}>
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4 h3">Neto social</span>
          </a>

          <div className="d-flex align-items-center">
            {isAuthenticated ? <LogoutForm/> : <LoginForm/>}
          </div>
        </div>
      </header>
  )
}
