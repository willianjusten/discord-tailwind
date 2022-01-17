import { render, screen } from '@testing-library/react'

import Message from '.'

describe('<Message />', () => {
  it('should render the heading', () => {
    const message = {
      text: 'lorem lorem'
    }
    render(<Message message={message} />)

    expect(screen.getByText(message.text)).toBeInTheDocument()
  })
})
