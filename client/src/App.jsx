import { useState } from 'react'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/register'
import Profile from './components/profile'



function App(props) {
  
  function content(props){
    if(props.page === "login"){
      return <Login />
    }
    if(props.page === "dash"){
      return <Dashboard />
    }
    if(props.page === "register"){
      return <Register />
    }
    if(props.page === "profile"){
      return <Profile />
    }
    return <>
          <Navbar />
          <Home />
          </>
  }

  return (
    <>
      {content(props)}
    </>
  )
}

export default App
