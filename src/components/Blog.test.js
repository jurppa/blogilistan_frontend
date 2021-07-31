import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'



test('renders title and author', () => {
  const blog = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const component = render(
    <Blog note={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})