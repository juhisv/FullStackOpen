const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter numbers: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
