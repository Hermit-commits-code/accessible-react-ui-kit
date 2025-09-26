import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders nothing if only one page', () => {
    const { container } = render(
      <Pagination page={1} pageCount={1} onPageChange={() => {}} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders correct number of page buttons', () => {
    render(<Pagination page={2} pageCount={3} onPageChange={() => {}} />)
    expect(screen.getAllByRole('button')).toHaveLength(5) // prev, 1, 2, 3, next
  })

  it('calls onPageChange when page button clicked', () => {
    const onPageChange = jest.fn()
    render(<Pagination page={2} pageCount={3} onPageChange={onPageChange} />)
    fireEvent.click(screen.getByText('3'))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it('disables prev at first page', () => {
    render(<Pagination page={1} pageCount={3} onPageChange={() => {}} />)
    expect(screen.getByLabelText('Previous page')).toBeDisabled()
  })

  it('disables next at last page', () => {
    render(<Pagination page={3} pageCount={3} onPageChange={() => {}} />)
    expect(screen.getByLabelText('Next page')).toBeDisabled()
  })

  it('shows ellipsis for many pages', () => {
    render(<Pagination page={5} pageCount={10} onPageChange={() => {}} />)
    expect(screen.getAllByText('…')).toHaveLength(2)
  })
})
