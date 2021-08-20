import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { showAllUsers } from '../reducers/userInfoReducer'
import { useDispatch } from 'react-redux'


import User from './User'
const Users = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showAllUsers())
  }, [])
  const users = useSelector(state => state.userInfo)
  console.log(users)

  return(
    <div><table><thead>
      <tr><th>User</th>
        <th>Blogs created</th></tr></thead>{users.map((a) =>
      <User key={a.id} username={a.username} blogsCreated={a.blogs} id={a.id}/>)}</table></div>)
}

export default Users
