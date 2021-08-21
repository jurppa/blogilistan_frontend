import React from 'react'
import { useParams } from 'react-router'
const UserInfo = ({ users }) => {
  const id = useParams().id


  const user = users.find(a => a.id === id)
  if(!user) return null
  else {
    return(<div><h2>{ user.username }</h2>added blogs<ul>{user.blogs.map(a => <li key={a.id}>{a.title}</li>)}</ul></div>)
  }
}


export default UserInfo