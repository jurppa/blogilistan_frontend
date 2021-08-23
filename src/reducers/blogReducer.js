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
  { const findLiked = state.find(a => a.id === action.data.id)
    const updt = { ...findLiked, likes: findLiked.likes++ }
    return  state.map((a) => ( a.id === action.data ? updt : a)) }
  case 'DELETE':

    return state.filter((a) => ( a.id !== action.data))
  case 'COMMENT':
  {
    const commentedBlog = state.find(a => a.id === action.data.id)
    commentedBlog.comments.concat(action.data.comment)

    return state.map((a) => a.id === action.data.id ? commentedBlog : a)}
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
    dispatch({ type: 'ADD', data: newBlog })

  }

}
export const likeBlog = (blog) => {
  return async (dispatch) => {
    await blogService.updateBlog(blog)
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

export const commentBlog = (id, comment) => {
  return async (dispatch) => {
    await blogService.commentBlog(id, comment)
    dispatch({ type: 'COMMENT', data: { comment: comment, id: id } })
  }
}
export default blogReducer