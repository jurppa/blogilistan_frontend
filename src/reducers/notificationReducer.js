

const notificationReducer = (state = '', action) => {

  switch (action.type)
  {

  case 'SHOW':
    return action.data
  case 'HIDE':
    return ''
  default:
    return state
  }
}

export const showNotification = (notification) => {
  return  {
    type:'SHOW', data:  notification  }
}
export const hideNotification = () => {
  return { type: 'HIDE' }
}


export default notificationReducer