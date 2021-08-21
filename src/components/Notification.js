import React from 'react'
const Notification = ({ color, notification }) => {
// Store

  const notificationStyle = {

    color: color,

    fontSize: 27,
    border: '1px solid black',
    backgroundColor: 'snow',
    marginBottom: 40,
    borderRadius: 4,
  }
  return <div style={notificationStyle}>{notification}</div>
}

export default Notification
