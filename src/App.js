import React, { useState, useEffect, useRef } from 'react'
import Notification from './components/Notification'
import Users from './components/Users'
// Todo refaktoroi komponentteihin
import UserInfo from './components/UserInfo'

import {

  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import Blogs from './components/Blogs'
import NewBlog from './components/NewBlog'
import Togglable from './components/Togglable'
import { useDispatch } from 'react-redux'
import { showNotification, hideNotification } from './reducers/notificationReducer'
import { useSelector } from 'react-redux'
import { addBlog, initBlogs, likeBlog, removeBlog } from './reducers/blogReducer'
import { loginUser, logOutUser } from './reducers/userReducer'
const App = () => {
  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')
  const blogFormRef = useRef()
  const [notificationColor, setNotificationColor] = useState('green')
  const blogs = useSelector(state => state.blogs)
  const notification = useSelector(state => state.notifications)
  const user = useSelector(state => state.users)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initBlogs())
  }, [])
  useEffect(() => {

  }, [])
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      dispatch(loginUser({ username, password }))



      setUsername('')
      setPassword('')

    } catch (exception) {
      dispatch(showNotification('wrong username or password'))
      setNotificationColor('orange')
      setTimeout(() => {
        dispatch(hideNotification())
        setNotificationColor('green')
      }, 5000)
    }
  }
  const handlePost = async (newPost) => {
    blogFormRef.current.toggleVisibility()

    try {


      dispatch(addBlog(newPost, user.token))
      dispatch(showNotification('Created new blogpost'))
      setTimeout(() => {
        dispatch(hideNotification())
        setNotificationColor('green')
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = (updatedPost) => {

    dispatch(likeBlog(updatedPost))
    dispatch(showNotification(`liked blog ${updatedPost.id}`))

  }

  const handleDelete = async (id) => {
    if (window.confirm('delete blog?')) {
      dispatch(removeBlog(id, user.token))
    }
  }

  if (user === null) {
    return (
      <form onSubmit={handleLogin}>
        <Notification  color={notificationColor} notification={notification}/>

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
      <Router>
        <Notification color={notificationColor} notification={notification} />
        <div>
          <div>
            <Link to='/users'>users</Link>
            <Link to='/'>home</Link>
          </div>
          <h4>
            {user.username} logged in
            <button
              onClick={() => {
                dispatch(logOutUser())
              }}
            >
            log out
            </button>
          </h4>
          <Switch>

            <Route path="/users/">
              <Users />

            </Route>
            <Route path="/users/:id">
              <UserInfo />
            </Route>
            <Route path='/'>
              <Togglable buttonLabel="create new blog" ref={blogFormRef}>
                <h3>create new</h3>
                <NewBlog handlePost={handlePost} user={user} />
              </Togglable>
              <Blogs
                blogs={blogs}
                userId={user.id}
                deletePost={handleDelete}
                handleUpdate={handleUpdate}
              />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
