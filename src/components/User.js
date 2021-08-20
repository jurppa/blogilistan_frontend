import React from 'react'
import { Link } from 'react-router-dom'
const User = ({ username, blogsCreated, id }) => {
  return(<tbody>

    <tr><td><Link to={`/users/${id}`}>{username}</Link></td>
      <td>{blogsCreated.length}</td></tr></tbody>)
}

export default User