import React, { useState } from 'react'

const Blog = ({ blog, handleUpdate, user, userId, deletePost }) => {
  const [shown, setShown] = useState('')

  const fullInfo = {
    border: '1px solid black',
    backgroundColor: 'beige',
  }
  const likeBlog = (blog) => {
    const updatedBlog = {
      id: blog.id,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
    }

    handleUpdate(updatedBlog)
  }
  if (shown === 'shown') {
    return (
      <div style={fullInfo}>
        {blog.title}
        <br /> {blog.author} <br />
        {blog.url}
        <br />
        {blog.likes} added by:
        <button
          onClick={() => {
            likeBlog(blog)
          }}
        >
          like this
        </button>
        <br />
        <button
          onClick={() => {
            setShown('')
          }}
        >
          hide
        </button>
        <div>
          {userId === blog.user.id ? (
            <button
              onClick={() => {
                deletePost(blog.id)
              }}
            >
              remove
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    )

    // else show
  } else {
    return (
      <div>
        {blog.title}
        {blog.author}
        <button
          onClick={() => {
            setShown('shown')
          }}
        >
          view
        </button>
      </div>
    )
  }
}
export default Blog
