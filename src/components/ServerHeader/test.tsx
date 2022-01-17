import { render, screen } from '@testing-library/react'

import ServerHeader from '.'

describe('<ChannelHeader />', () => {
  it('should render correctly', () => {
    render(<ServerHeader name='NextJS' />)

    expect(screen.getByRole('button', { name: /NextJS/i })).toBeInTheDocument()
  })
})
