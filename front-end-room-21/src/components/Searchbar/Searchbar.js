import "./Searchbar.css";

/* Move handleChange and handleAdd to App.js once front-end is dynamic. */

function handleChange(e) {
  console.log(e.target.value);
  /* We will set the text state of the input here when page is dynamic*/
}

function handleAdd() {
  /* We will send a search here when the page is dynamic, using the text state managed by handleChange.*/
  console.log("The Search Button was clicked.");
}

function Searchbar() {
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
