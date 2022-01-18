import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ChannelList from '.'

import { data } from 'data'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let cid = 1

useRouter.mockImplementation(() => ({
  query: {
    cid
  }
}))


describe('<ChannelList />', () => {
  it('should render the list', () => {
    render(<ChannelList server={data[0]} />)

    // headers
    expect(screen.getByText(/tailwind css/i)).toBeInTheDocument()
    expect(screen.getByText(/tailwind labs/i)).toBeInTheDocument()
    expect(screen.getByText(/off topic/i)).toBeInTheDocument()
    expect(screen.getByText(/community/i)).toBeInTheDocument()

    // channel link
    expect(screen.getByText(/general/i)).toBeInTheDocument()
  })

  it('should collapse read channels when clicking in the header', () => {
    render(<ChannelList server={data[0]} />)

    // started showing
    expect(screen.getByText(/internals/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/tailwind css/i))

    // it should be collapsed
    expect(screen.queryByText(/internals/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/tailwind css/i))

    // it should show again
    expect(screen.getByText(/internals/i)).toBeInTheDocument()
  })
})
