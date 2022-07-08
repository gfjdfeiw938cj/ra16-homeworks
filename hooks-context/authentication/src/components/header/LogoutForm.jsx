import {useContext} from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginForm() {

  const {onLogout, user} = useContext(AuthContext)
  return (
    <div className={'loggedIn d-flex align-items-center'}>
      <div className={'me-2'}>Hello, {user && user.name}</div>
      <div className={'me-2'}>{user && <img className={'rounded-circle'} src={user.avatar} alt='' /> }</div>
      <form onSubmit={() => onLogout()}>
        <div className={'form-group'}>
          <button className={'btn btn-outline-success'}>Logout</button>
        </div>
      </form>
    </div>
  )
}
