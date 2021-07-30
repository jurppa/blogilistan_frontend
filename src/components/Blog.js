import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [shown, setShown] = useState('')
  const fullInfo = {
    border: '1px solid black',
    backgroundColor: 'beige',
  }

  if (shown === 'shown') {
    return (
      <div style={fullInfo}>
        {blog.title}
        <br /> {blog.author} <br />
        {blog.url}
        <br />
        {blog.likes} <button>like this</button>
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
