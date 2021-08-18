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
  default:
    return state
  }
}
// Todo jatka tästä, pitäisikö tässä tallentaa jo localstorageen?
export const loginUser =  ({ username, password }) => {
  return  async (dispatch) => {
    const user = await loginService.login({ username, password })
    dispatch( { type:'LOGIN', data: user })
  }}
export default userReducer