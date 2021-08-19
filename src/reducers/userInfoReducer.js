const userInfoReducer = (state = [], action) => {
  switch(action.type)
  {
  case 'ALL':
    return state
  default:
    return state
  }

}
export const showAllUsers = () => {

  console.log('show all users action creator')
}
export default userInfoReducer