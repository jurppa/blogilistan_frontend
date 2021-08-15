import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {

  switch(action.type)
  {
  case 'INIT':

    //INIT STATE
    console.log(action.data)
    return action.data
  case 'ADD':
    return [...state, action.data]
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
export default blogReducer