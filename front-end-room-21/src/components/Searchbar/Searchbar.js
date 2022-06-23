import "./Searchbar.css";

function Searchbar({ handleChange, handleSearch }) {
  return (
    <div className="searchbar-div">
      <input
        onChange={handleChange}
        className="input-field"
        placeholder="Search by name..."
      ></input>
      <button onClick={handleSearch} className="search-button" aria-label='searchbar'>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
