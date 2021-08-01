import React, { useState } from 'react'

const Blog = ({ blog, handleUpdate, userId, deletePost }) => {
  console.log('userId: ', userId)

  const [shown, setShown] = useState('')
  console.dir(blog)
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
        likes: {blog.likes}
        <button id='like'
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
          {userId === blog.user.id.toString() ? (
            <button id='delete'
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
      <div className='blogdiv'>
        <hr />

        title:{blog.title}<br />
        author:{blog.author}<br />
        <button id='view'
          onClick={() => {
            setShown('shown')
          }}
        >
          view
        </button>
        <hr />
      </div>
    )
  }
}

export default Blog
