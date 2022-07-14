import { useState } from 'react';
import { useAuth } from "../../hooks/useAuth";

export default function LoginForm() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {onLogin, message} = useAuth()
  return (
    <form>
      <div className={'form-group d-flex'}>
        <input className={'form-control me-2'} placeholder={'Username'} type="text" id={'login'} name={'login'} onChange={(event) => {
          setUser(event.target.value);
        }} />
        <input className={'form-control me-2'} placeholder={'Password'} type="password" id={'password'} name={'password'} onChange={(event) => {
          setPassword(event.target.value);
        }}/>
        <button className={'btn btn-outline-danger'} type={'button'} onClick={()=> onLogin(user, password)}>Login</button>
      </div>
      {message && <div className={'message'}>{message}</div> }
    </form>
  )
}
