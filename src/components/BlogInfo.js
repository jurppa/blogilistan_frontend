import React from 'react'
import { useParams } from 'react-router'
const BlogInfo = ({ blogs, handleUpdate }) => {
  const id = useParams().id


  // bloginfo
  const blog = blogs.find(a => a.id === id)
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
  if(!blog) return null
  else {
    return(<div><h2>{ blog.title }</h2><a href={ blog.url }>{ blog.url }</a><p>{blog.likes} <button onClick={() => {likeBlog(blog)}}>like</button></p><p>added by {blog.user.username}</p></div>)
  }
}
export default BlogInfo