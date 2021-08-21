import React from 'react'
import { Link } from 'react-router-dom'
const Blog = ({ blog  }) => {
  //
//  const [shown, setShown] = useState('')

  // const fullInfo = {
  //   border: '1px solid black',
  //   backgroundColor: 'beige',
  // }
  // const likeBlog = (blog) => {
  //   const updatedBlog = {
  //     id: blog.id,
  //     title: blog.title,
  //     author: blog.author,
  //     url: blog.url,
  //     likes: blog.likes + 1,
  //   }

  //   handleUpdate(updatedBlog)
  //   setShown('')
  // }
  // if (shown === 'shown') {
  //   return (
  //     <div style={fullInfo} className="blogdiv">
  //       {blog.title}
  //       <br /> {blog.author} <br />
  //       {blog.url}
  //       <br />
  //       likes: {blog.likes}
  //       <button id='like'
  //         onClick={() => {
  //           likeBlog(blog)
  //         }}
  //       >
  //         like this
  //       </button>
  //       <br />
  //       <button
  //         onClick={() => {
  //           setShown('')
  //         }}
  //       >
  //         hide
  //       </button>
  //       <div>
  //         {userId === blog.user.id.toString() ? (
  //           <button id='delete'
  //             onClick={() => {
  //               deletePost(blog.id)
  //             }}
  //           >
  //             remove
  //           </button>
  //         ) : (
  //           ''
  //         )}
  //       </div>
  //     </div>
  //   )
  //   // else show
  // } else {
  return (
    <div className='blogdiv'>
      <hr />

        title:<Link to={`/blogs/${blog.id}`}>{blog.title}<br /></Link>
        author:{blog.author}<br />
      {/* <button id='view'
          onClick={() => {
            setShown('shown')
          }}
        >
          view
        </button> */}
      <hr />
    </div>
  )
}


export default Blog
