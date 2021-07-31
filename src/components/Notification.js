import React from 'react'
import PropTypes from 'prop-types'
const Notification = ({ color, notification }) => {
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
Notification.propTypes = {
  color: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired

}
export default Notification
