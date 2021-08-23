import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../reducers/userReducer'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const Navigation = ({ username }) => {
  const dispatch = useDispatch()
  return (
    <AppBar position='static'><Toolbar variant='dense'><Link to='/users'>users</Link>

      <Link to='/'>home</Link>{username} <Button onClick={() => {dispatch(logOutUser())}}>log out</Button></Toolbar></AppBar>)

}
export default Navigation