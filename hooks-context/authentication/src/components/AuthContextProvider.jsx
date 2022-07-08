import React, { useState, useEffect} from "react";
import AuthContext from "../contexts/AuthContext";

export default function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})

  const storage = window.localStorage;
  const storageToken = storage.getItem('token')

  const onLogin = (login, password) => {
    fetch('http://localhost:7070/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"login": login, "password": password})
    })
      .then(res => res.json())
      .then(response => {
        if(response.token) {
          saveToken(response.token)
        } else if(response.message) {
          setMessage(response.message)
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const onLogout = () => {
    storage.removeItem('token')
    setToken('')
  }

  const saveToken = token => {
    if(!storageToken) {
      storage.setItem('token', token)
      setToken(token)
    }
  }

  useEffect(() => {
    if(storageToken) {
      const savedToken = storage.getItem('token')
      setToken(savedToken)
    }

    if(!token) {
      return
    }
    fetch('http://localhost:7070/private/me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
      .then((response) => {
        const status = response.status;
        if(status === 200) {
          setIsAuthenticated(true);
          return response.json()
        } else {
          onLogout()
        }
      })
      .then(res => setUser(res))
      .catch((error) => {
        console.log(error.response)
      });
  }, [token, storage, storageToken]);

  return (
    <AuthContext.Provider value={{isAuthenticated, onLogin, onLogout, message, user, token}}>
      {props.children}
    </AuthContext.Provider>
  );
};
