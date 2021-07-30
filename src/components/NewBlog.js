const NewBlog = (props) => {
  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={props.handlePost}>
        title <input onChange={props.title} />
        <br />
        author
        <input onChange={props.author} /> <br />
        url <input onChange={props.url} /> <br />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default NewBlog
