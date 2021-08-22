import { Container, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'

const NewBlog = (props) => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  const [author, setAuthor] = useState('')
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
    <Container>
      <div>
        <form onSubmit={makeBlog}>
          <TextField label='title' id='title' onChange={({ target }) => setTitle(target.value)} />
          <TextField label='author' id='author' onChange={({ target }) => setAuthor(target.value)} /> <br />
          <TextField label='url' id='url' onChange={({ target }) => setUrl(target.value)} /> <br />
          <Button variant='contained' color='primary' id='createpost' type="submit">create</Button>
        </form>

      </div>
    </Container>
  )
}
export default NewBlog
