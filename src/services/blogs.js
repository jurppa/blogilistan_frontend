import axios from 'axios'
const baseUrl = '/api/blogs'
// TODO: ASYNCIKSI
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}
const postNew = async (newBlog, token) => {

  const data = await axios.post(baseUrl, newBlog, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data.data
}
const updateBlog = async (newBlog) => {
  const data = await axios
    .put(`/api/blogs/${newBlog.id}`, newBlog)
  return data.data
}
const removeBlog = (id, token) => {
  const data =  axios
    .delete(`/api/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  return data
}
const getUsers = () => {
  const data = axios.get('/api/users/')
  return data
}

export default { getAll, postNew, updateBlog, removeBlog, getUsers }
