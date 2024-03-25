import "./Searchbar.css"

function Searchbar({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <input
      className="inp"
      type="text"
      placeholder="search..."
      onChange={handleSearchChange}
    />
  )
}

export default Searchbar




