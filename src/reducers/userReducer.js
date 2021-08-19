import loginService from '../services/login'
const loggedUserJSON = JSON.parse(window.localStorage.getItem('loggedInUser'))

const logdin = loggedUserJSON ? loggedUserJSON : null
const userReducer = (state = logdin, action) => {

  switch(action.type)
  {
  case 'LOGIN':
    window.localStorage.setItem('loggedInUser', JSON.stringify(action.data))

    console.log('login data',action.data)
    return action.data
  case 'LOGOUT':
    return null
  default:
    return state
  }
}
export const loginUser =  ({ username, password }) => {
  return  async (dispatch) => {
    const user = await loginService.login({ username, password })
    dispatch( { type:'LOGIN', data: user })
  }}

export const logOutUser =() => {
  window.localStorage.removeItem('loggedInUser')

  return { type: 'LOGOUT' }
}
export default userReducer