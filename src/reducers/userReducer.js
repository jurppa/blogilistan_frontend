import loginService from '../services/login'
const loggedUserJSON = window.localStorage.getItem('loggedInUser')

const logdin = loggedUserJSON ? loggedUserJSON : null
const userReducer = (state = logdin, action) => {

  console.log('user state now', state)
  switch(action.type)
  {
  case 'LOGIN':
    console.log('login data',action.data)
    return action.data
  default:
    return state
  }
}
// Todo jatka tästä, pitäisikö tässä tallentaa jo localstorageen?
export const loginUser =  ({ username, password }) => {
  return  async (dispatch) => {
    const user = await loginService.login({ username, password })
    console.log(user)
    dispatch( { type:'LOGIN', data: user })
  }}
export default userReducer