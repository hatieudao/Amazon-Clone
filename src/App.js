import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PublicRouter from './routes/public'
import { auth } from './fisebase'
import { userLogin, userLogout } from './redux/Actions/User'
import './App.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(userLogin(authUser))
      } else {
        dispatch(userLogout())
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <PublicRouter />
      </div>
    </Router>
  )
}

export default App
