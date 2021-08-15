import axios from 'axios'
const baseUrl = '/api/blogs'
// TODO: ASYNCIKSI
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}
const postNew = (newBlog, token) => {
  axios
    .post(baseUrl, newBlog, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}
const updateBlog = (newBlog) => {
  return axios
    .put(`/api/blogs/${newBlog.id}`, newBlog)
    .then((response) => response)
    .catch((error) => console.log(error))
}
const removeBlog = (id, token) => {
  axios
    .delete(`/api/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

export default { getAll, postNew, updateBlog, removeBlog }
