import blogService from '../services/blogs'

const userInfoReducer = (state = [], action) => {
  switch(action.type)
  {
  case 'ALL':
    return action.data.data
  default:
    return state
  }

}
export const showAllUsers = () => {

  return async (dispatch) => {

    const users = await blogService.getUsers()
    dispatch({ type:'ALL', data: users })
  }
}
export default userInfoReducer