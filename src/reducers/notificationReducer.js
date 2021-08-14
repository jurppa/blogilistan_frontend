const notificationReducer = (state = '', action) => {

  switch (action.type)
  {

  case 'SHOW':
    console.log('ACTION DATA', action.data)
    console.log('SHOW CASE')
    return action.data
  case 'HIDE':
    return 'HIDE'
  default:
    return state
  }
}
export const showNotification = (notification) => {
  console.log('SHOW NOTIFICATION: ', notification)
  return  {
    type:'SHOW', data: 'KOVAKOODATTU', notification  }
}


export default notificationReducer