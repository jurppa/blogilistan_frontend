import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {

  switch(action.type)
  {
  case 'INIT':

    //INIT STATE
    return action.data
  case 'ADD':
    return [...state, action.data]
  case 'LIKE':
    return state.map((a) => ( a.id === action.data.id ? action.data : a))
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
    const likedBlog = await blogService.updateBlog(blog)
    dispatch({ type: 'LIKE', data: likedBlog.data })
  }
}
export default blogReducer