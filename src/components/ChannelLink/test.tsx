import { render, screen } from '@testing-library/react'

import ChannelLink from '.'

describe('<ChannelLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<ChannelLink />)

    expect(screen.getByRole('heading', { name: /ChannelLink/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
