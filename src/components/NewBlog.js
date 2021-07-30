const NewBlog = ({
  handlePost,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
}) => {
  return (
    <div>
      <form onSubmit={handlePost}>
        title <input onChange={handleTitleChange} />
        <br />
        author
        <input onChange={handleAuthorChange} /> <br />
        url <input onChange={handleUrlChange} /> <br />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default NewBlog
