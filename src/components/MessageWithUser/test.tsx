import { render, screen } from '@testing-library/react'

import MessageWithUser from '.'

describe('<MessageWithUser />', () => {
  it('should render correctly', () => {
    const message = {
      text: 'Lorem Lorem',
      avatarUrl: '/avatars/0.jpg',
      user: 'John Doe',
      date: '09/24/2021'
    }
    render(<MessageWithUser message={message} />)

    expect(screen.getByRole('img', { name: message.user })).toBeInTheDocument()
    expect(screen.getByText(message.user)).toBeInTheDocument()
    expect(screen.getByText(message.date)).toBeInTheDocument()
    expect(screen.getByText(message.text)).toBeInTheDocument()
  })
})
