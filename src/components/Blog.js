import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, handleUpdate }) => {
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
    // TODO Vaihda App.js ->
    blogService.updateBlog(updatedBlog)
    // Update tällä? ->
    handleUpdate()
  }
  if (shown === 'shown') {
    return (
      <div style={fullInfo}>
        {blog.title}
        <br /> {blog.author} <br />
        {blog.url}
        <br />
        {blog.likes}{' '}
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
