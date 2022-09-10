import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CountBtn from './CountBtn'

describe('Input', async () => {
  
  it('should render the button', () => {
    render( <CountBtn /> )
    expect(screen.getByTestId('count-btn')).toBeInTheDocument()
  })

  it('should change count value', async () => {
    render( <CountBtn /> )

    screen.logTestingPlaygroundURL()

    const btn = screen.getByTestId('count-btn')
    expect(btn).toBeInTheDocument()
    userEvent.click(btn)
    await waitFor(() => {
      expect(btn).toHaveTextContent('1')
    })
  })

})