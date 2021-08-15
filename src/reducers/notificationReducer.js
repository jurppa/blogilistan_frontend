

const notificationReducer = (state = '', action) => {

  switch (action.type)
  {

  case 'SHOW':
    console.log('ACTION DATA', action.data)
    console.log('SHOW CASE')
    return action.data
  case 'HIDE':
    return ''
  default:
    return state
  }
}
export const showNotification = (notification) => {
  console.log('SHOW NOTIFICATION: ', notification)
  return  {
    type:'SHOW', data:  notification  }
}
export const hideNotification = () => {
  return { type: 'HIDE' }
}


export default notificationReducer