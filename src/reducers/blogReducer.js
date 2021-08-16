import blogService from '../services/blogs'
import { showNotification } from './notificationReducer'
const blogReducer = (state = [], action) => {

  switch(action.type)
  {
  case 'INIT':

    //INIT STATE
    return action.data
  case 'ADD':
    return [...state, action.data]
  case 'LIKE':
    console.log('like state', action.data)
    { const updt = state.map((a) => ( a.id === action.data.id ? action.data : a))
      return updt }
  case 'DELETE':

    return state.filter((a) => ( a.id !== action.data.id))
  default:
    return state
  }
}
export const initBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({ type: 'INIT', data: blogs })
  }}
export const addBlog = (blog, token) => {
  return async (dispatch) => {
    const newBlog = await blogService.postNew(blog, token)
    console.dir('New blog', newBlog)
    dispatch({ type: 'ADD', data: newBlog })

  }

}
export const likeBlog = (blog) => {
  return async (dispatch) => {
    const status = await blogService.updateBlog(blog)
    console.log(status)
    console.log(blog)

    dispatch({ type: 'LIKE', data: blog })
  }
}
export const removeBlog = (id, token) => {
  return async (dispatch) => {

    await blogService.removeBlog(id, token)
    dispatch({ type: 'DELETE', data: id })
    dispatch(showNotification('deleted blog'))
  }

}
export default blogReducer