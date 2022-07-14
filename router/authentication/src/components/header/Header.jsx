import { useAuth } from "../../hooks/useAuth";
import LogoutForm from "./LogoutForm";
import LoginForm from "./LoginForm";
import {Link} from "react-router-dom";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
      <header className="bg-light mb-4">
        <div className={'container d-flex flex-wrap justify-content-center py-3'}>
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4 h3">Neto social</span>
          </a>

          <nav className="navbar">
            <ul className="navbar-nav mr-auto me-4">
              <li className="nav-item">
                <Link to='/news'>News</Link>
              </li>
            </ul>
          </nav>

          <div className="d-flex align-items-center">
            {isAuthenticated ? <LogoutForm/> : <LoginForm/>}
          </div>
        </div>
      </header>
  )
}
