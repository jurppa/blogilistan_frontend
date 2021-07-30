const Notification = (props) => {
  const notificationStyle = {
    color: props.color,

    fontSize: 27,
    border: '1px solid black',
    backgroundColor: 'snow',
    marginBottom: 40,
    borderRadius: 4,
  }
  return <div style={notificationStyle}>{props.notification}</div>
}

export default Notification
