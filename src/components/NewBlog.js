import React, { useState } from 'react'

const NewBlog = (props) => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  console.log(props.user)
  const makeBlog = (event) => {
    event.preventDefault()
    const blogToAdd = {
      title: title,

      author: author,
      url: url,
      user: props.user,
    }
    props.handlePost(blogToAdd)
  }

  return (
    <div>
      <form onSubmit={makeBlog}>
        title <input onChange={({ target }) => setTitle(target.value)} />
        <br />
        author
        <input onChange={({ target }) => setAuthor(target.value)} /> <br />
        url <input onChange={({ target }) => setUrl(target.value)} /> <br />
        <button type="submit">create</button>
      </form>
      {author} {title} {url}
    </div>
  )
}
export default NewBlog
