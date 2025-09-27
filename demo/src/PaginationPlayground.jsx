import Pagination from '../../src/components/Pagination/Pagination'

export default function PaginationPlayground() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Pagination Demo</h2>
      <Pagination
        totalPages={10}
        currentPage={1}
        onPageChange={(page) => alert(`Page: ${page}`)}
      />
    </div>
  )
}
