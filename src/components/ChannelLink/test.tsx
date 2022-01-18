import { render, screen } from '@testing-library/react'

import ChannelLink from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let cid = 3

useRouter.mockImplementation(() => ({
  query: {
    cid
  }
}))

describe('<ChannelLink />', () => {
  it('should render the link as inactive and unread', () => {
    const channel = {
      id: 1,
      label: 'welcome',
      icon: 'Book',
      unread: true
    }
    const serverId = 1

    const { container } = render(
      <ChannelLink serverId={serverId} channel={channel} />
    )

    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/servers/${serverId}/channels/${channel.id}`
    )
    expect(screen.getByRole('link', { name: /welcome/i })).toHaveClass(
      'text-white hover:bg-gray-550/[0.16]'
    )
  })

  it('should render with hashtag icon if icon is not passed', () => {
    const channel = {
      id: 1,
      label: 'welcome'
    }

    render(<ChannelLink serverId={1} channel={channel} />)

    expect(screen.getByTitle(/hashtag/i)).toBeInTheDocument()
  })

  it('should render as active if the route is the same as the channel', () => {
    cid = 1

    const channel = {
      id: 1,
      label: 'welcome',
      icon: 'Book'
    }

    render(<ChannelLink serverId={1} channel={channel} />)

    expect(screen.getByRole('link', { name: /welcome/i })).toHaveClass(
      'text-white bg-gray-550/[0.32]'
    )
  })

  it('should render as inactive and read', () => {
    cid = 1235
    const channel = {
      id: 1,
      label: 'welcome'
    }

    render(<ChannelLink serverId={1} channel={channel} />)

    expect(screen.getByRole('link', { name: /welcome/i })).toHaveClass(
      'text-gray-300 hover:text-gray-100 '
    )
  })
})
