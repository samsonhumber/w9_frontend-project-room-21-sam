import "./Searchbar.css";

function Searchbar({ text, handleChange, handleAdd }) {
  console.log(text);
  return (
    <div className="searchbar-div">
      <input
        onChange={handleChange}
        className="input-field"
        placeholder="Search by name or region..."
      ></input>
      <button onClick={handleAdd} className="search-button">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
