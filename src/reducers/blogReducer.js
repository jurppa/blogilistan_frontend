import blogService from '../services/blogs'

const blogReducer = (state = '', action) => {

  switch(action.type)
  {
  case 'INIT':

    //INIT STATE
    return state
  default:
    return ''
  }
}
export const initBlogs = () => {
  const blogs = blogService.getAll()
  return { type: 'INIT', data: blogs }
}
export default blogReducer