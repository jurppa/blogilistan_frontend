import React from 'react'
import Blog from './Blog'
const Blogs = ({ deletePost, userId, user, handleUpdate, blogs }) => {
  return(
    <div><h2>blogs</h2>{blogs
      .sort((a, b) => b.likes - a.likes)
      .map((blog) => (

        <Blog
          key={blog.id}
          blog={blog}
          handleUpdate={handleUpdate}
          user={user}
          userId={userId}
          deletePost={deletePost}
        />
      ))}</div>)
}

export default Blogs