import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      setUser(user.username)
      setToken(user.token)
    }
  }, [])
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      })

      setUser(user.username)
      setUsername('')
      setPassword('')
      window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    } catch (exception) {
      alert('wrong login info')
    }
  }
  const handlePost = async (event) => {
    event.preventDefault()
    alert('handlepost')
    const newPost = {
      title: title,

      author: author,
      url: url,
    }

    await blogService.postNew(newPost, token)
  }
  if (user === null) {
    return (
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    )
  } else {
    return (
      <div>
        <h2>blogs</h2>
        <h4>
          {user} logged in{' '}
          <button
            onClick={() => {
              window.localStorage.removeItem('loggedInUser')
              setUser(null)
            }}
          >
            log out
          </button>
        </h4>
        <h3>create new</h3>
        <form onSubmit={handlePost}>
          title <input onChange={({ target }) => setTitle(target.value)} />
          <br />
          author
          <input onChange={({ target }) => setAuthor(target.value)} /> <br />
          url <input onChange={({ target }) => setUrl(target.value)} />
          <br />
          <button type="submit">create</button>
        </form>

        {title}
        {author}
        {url}
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    )
  }
}
export default App
