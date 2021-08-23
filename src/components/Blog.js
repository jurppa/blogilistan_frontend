import React from 'react'
import { Link } from 'react-router-dom'
const Blog = ({ blog  }) => {

  return (

    <div>
      <hr />

        title:<Link to={`/blogs/${blog.id}`}>{blog.title}<br /></Link>
        author:{blog.author}<br />
      <hr />
    </div>
  )
}


export default Blog
