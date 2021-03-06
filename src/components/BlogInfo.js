import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { TextField } from '@material-ui/core'
const BlogInfo = ({ blogs, handleUpdate, handleComment }) => {

  const id = useParams().id
  const [comment, setComment] = useState('')

  // bloginfo
  const blog = blogs.find(a => a.id === id)
  console.log('bloginfo blog', blog)
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
  const commentBlog = () => {
    handleComment(blog.id, comment)
  }
  if(!blog) return null
  else {
    return(<div><h2 style={ { fontSize: '37px' } }>{ blog.title }</h2><a href={ blog.url }>{ blog.url }</a><p>{blog.likes} <button onClick={() => {likeBlog(blog)}}>like</button></p><p style={ { borderRadius: '7px', padding: '10px', color: 'white', fontSize:'27px', backgroundColor: 'teal' } }>added by {blog.user.username}</p>
      <h2>comments</h2>
      <TextField onChange={({ target }) => setComment(target.value)}></TextField><button onClick={() => {commentBlog()}}>comment</button>

      <ul>{ blog.comments.map(a => <li key={Math.random() * 1000}>{ a.content }</li> ) } </ul></div>)
  }
}
export default BlogInfo