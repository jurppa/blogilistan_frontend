import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'

import NewBlog from './components/NewBlog'
import Togglable from './components/Togglable'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const blogFormRef = useRef()
  const [userId, setUserId] = useState('')
  const [notificationColor, setNotificationColor] = useState('green')

  const [notification, setNotification] = useState('')

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      setUser(user.username)
      setToken(user.token)
      setUserId(user.id)
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
      setNotification('wrong username or password')
      setNotificationColor('orange')
      setTimeout(() => {
        setNotificationColor('green')
        setNotification(null)
      }, 5000)
    }
  }
  const handlePost = async (newPost) => {
    blogFormRef.current.toggleVisibility()

    try {
      blogService.postNew(newPost, token)

      await blogService.getAll().then((blogs) => setBlogs(blogs))
      setNotification(`Added blog ${newPost.title} `)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async (updatedPost) => {
    blogService.updateBlog(updatedPost)
    await blogService.getAll().then((blogs) => setBlogs(blogs))
  }

  const handleDelete = async (id) => {
    if (window.confirm('delete blog?')) {
      console.log('id to delete: ', id)
      blogService.removeBlog(id, token)
      await blogService.getAll().then((blogs) => setBlogs(blogs))
    }
  }

  if (user === null) {
    return (
      <form onSubmit={handleLogin}>
        <Notification notification={notification} color={notificationColor} />

        <div>
          username
          <input id='username'
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input id='password'
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id='loginbutton' type="submit">login</button>
      </form>
    )
  } else {
    return (
      <div>
        <Notification notification={notification} color={notificationColor} />
        <h2>blogs</h2>
        <h4>
          {user} logged in
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
        <Togglable buttonLabel="create new blog" ref={blogFormRef}>
          <NewBlog handlePost={handlePost} user={user} />
        </Togglable>
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleUpdate={handleUpdate}
              user={user}
              userId={userId}
              deletePost={handleDelete}
            />
          ))}
      </div>
    )
  }
}
export default App
