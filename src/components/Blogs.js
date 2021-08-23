import React from 'react'
import Blog from './Blog'
import {  Paper } from '@material-ui/core'
const Blogs = ({ deletePost, userId, user, handleUpdate, blogs }) => {
  return(

    <div><h2>blogs</h2>{blogs
      .sort((a, b) => b.likes - a.likes)
      .map((blog) => (

        <Paper key={blog.id} elevation={4}><Blog
          key={blog.id}
          blog={blog}
          handleUpdate={handleUpdate}
          user={user}
          userId={userId}
          deletePost={deletePost}
        /></Paper>
      ))}</div>)
}

export default Blogs