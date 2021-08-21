import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../reducers/userReducer'

const Navigation = ({ username }) => {
  const dispatch = useDispatch()
  return (
    <nav><a><Link to='/users'>users</Link></a>

      <a><Link to='/'>home</Link></a>{username} <button onClick={() => {dispatch(logOutUser())}}>log out</button></nav>)

}
export default Navigation