import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import NewBlog from './NewBlog'


test('renders title, author and likes', () => {
  const userId = '6102f6aecaab14345472cea9'
  const blog = {

    title: 'testing react',
    author: 'testuser',
    likes: 14,
    user: { id:'6102f6aecaab14345472cea9' }
  }
  console.log('blog user id: ', blog.user.id)
  const component = render(
    <Blog blog={blog}  userId={userId}/>
  )

  expect(component.container).toHaveTextContent(
    'testing react'
  )
})
test('clicking the button shows more info ', async () => {
  const blog = {
    title: 'testing react',
    author: 'testuser',
    likes: 14,
    url: 'www.google.fi',
    user: { id:'6102f6aecaab14345472cea9' }

  }


  const component = render(
    <Blog blog={blog} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(
    'www.google.fi' && 'likes'
  )
})

test('if like is clicked twice call eventhandler twice', async () => {
  const blog = {
    title: 'testing react',
    author: 'testuser',
    likes: 14,
    url: 'www.google.fi',
    user: { id:'6102f6aecaab14345472cea9' }

  }
  const mockHandler = jest.fn()
  const component = render(
    <Blog blog={blog} handleUpdate={mockHandler}
    />
  )
  const showButton = component.getByText('view')
  fireEvent.click(showButton)



  const likeButton = component.getByText('like this')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)


  expect(mockHandler.mock.calls).toHaveLength(2)
})


test('<NoteForm /> updates parent state and calls onSubmit', () => {
  const newBlog = jest.fn()

  const component = render(
    <NewBlog blog={newBlog} handlePost={newBlog}/>
  )

  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')

  const url = component.container.querySelector('#url')

  const form = component.container.querySelector('form')

  fireEvent.change(title, {
    target: { value: 'testataan' }
  })
  fireEvent.change(author, {
    target: { value: 'peksi' }
  })
  fireEvent.change(url, {
    target: { value: 'www.google.fi' }
  })

  fireEvent.submit(form)

  expect(newBlog.mock.calls).toHaveLength(1)
  expect(newBlog.mock.calls[0][0].title).toBe('testataan' )
  expect(newBlog.mock.calls[0][0].author).toBe('peksi' )

  expect(newBlog.mock.calls[0][0].url).toBe( 'www.google.fi')

})