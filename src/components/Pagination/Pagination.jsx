import React from 'react'
import PropTypes from 'prop-types'
import './hcc-pagination.css'

/**
 * Accessible Pagination component
 * @param {object} props
 * @param {number} props.page - Current page (1-based)
 * @param {number} props.pageCount - Total number of pages
 * @param {function} props.onPageChange - Callback with new page number
 */
export function Pagination({ page, pageCount, onPageChange }) {
  if (pageCount <= 1) return null
  const prevDisabled = page <= 1
  const nextDisabled = page >= pageCount

  const handlePageClick = (p) => {
    if (p !== page && p >= 1 && p <= pageCount) onPageChange(p)
  }

  // Show up to 5 page numbers, with ellipsis if needed
  let pages = []
  if (pageCount <= 5) {
    pages = Array.from({ length: pageCount }, (_, i) => i + 1)
  } else {
    if (page <= 3) {
      pages = [1, 2, 3, 4, '...', pageCount]
    } else if (page >= pageCount - 2) {
      pages = [1, '...', pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
    } else {
      pages = [1, '...', page - 1, page, page + 1, '...', pageCount]
    }
  }

  return (
    <nav className="hcc-pagination" aria-label="Pagination">
      <button
        className="hcc-pagination-btn"
        onClick={() => handlePageClick(page - 1)}
        disabled={prevDisabled}
        aria-label="Previous page"
      >
        &lt;
      </button>
      {pages.map((p, i) =>
        p === '...' ? (
          <span
            key={'ellipsis-' + i}
            className="hcc-pagination-ellipsis"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          <button
            key={p}
            className={
              p === page ? 'hcc-pagination-btn active' : 'hcc-pagination-btn'
            }
            aria-current={p === page ? 'page' : undefined}
            onClick={() => handlePageClick(p)}
            aria-label={p === page ? `Page ${p}, current` : `Go to page ${p}`}
            disabled={p === page}
          >
            {p}
          </button>
        ),
      )}
      <button
        className="hcc-pagination-btn"
        onClick={() => handlePageClick(page + 1)}
        disabled={nextDisabled}
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}
