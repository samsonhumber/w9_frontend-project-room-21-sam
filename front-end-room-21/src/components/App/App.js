import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { useState, useEffect } from "react";
import { BioList } from "../BiosList/bioList";
import useRegionFetch from "../../hooks/useRegionFetch";

function App() {
  const [text, setText] = useState();
  const [searchtext, setSearchtext] = useState();
  const [dropdownRegion, setdropDownRegion] = useState("");
  // NOTE: try a useReducer to account for many cases
  const [bioData, setBioData] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
    /* Updates every time you type into the Searchbar input. When you setText, that is the current value of whatever is typed there. */
  }

  function handleDropdownSelect(e) {
    console.log("Region selected");
    setdropDownRegion(e.target.value);
  }

  function handleAdd() {
    console.log("The Search Button was clicked.");
    setSearchtext(text);
    /* This is performed onClick in the Searchbar component, on the 'search' button. When you setSearchText, it sets a string value from the input bar as searchtext. We can then take this searchtext string, and send it to the API in a GET request for anything that contains or matches the searchtext string. */
  }

  useEffect(() => {
    async function fetchRegionData() {
      console.log("running fetch for dropdown");
      try {
        const url = "http://localhost:9000/profiles/?region=" + dropdownRegion;
        console.log(url);
        const response = await fetch(url);
        const responseJSON = await response.json();
        const responseData = responseJSON.payload;
        console.log(responseData);
        setBioData(responseData);
      } catch (err) {
        const responseData = "Sorry, we couldn't find the person you wanted.";
        console.log(responseData);
      }
    }
    fetchRegionData();
  }, [dropdownRegion]);

  useEffect(() => {
    async function fetchNameSearch() {
      console.log("running fetch by name from searchbar");
      try {
        const url = "http://localhost:9000/profiles/?name=" + searchtext;
        console.log(url);
        const response = await fetch(url);
        const responseJSON = await response.json();
        const responseData = responseJSON.payload;
        console.log(responseData);
        setBioData(responseData);
      } catch (err) {
        const responseData = "Sorry, we couldn't find the person you wanted.";
        console.log(responseData);
      }
    }
    fetchNameSearch();
  }, [searchtext]);

  return (
    <main className="App">
      <Navbar />
      <div className="search-display">
        <Searchbar
          text={text}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
        <Dropdown handleDropdownSelect={handleDropdownSelect} />
      </div>
      <BioList bootcampers={bioData} />
    </main>
  );
}

export default App;
