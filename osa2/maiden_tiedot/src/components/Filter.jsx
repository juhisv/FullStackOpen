const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter countries: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
