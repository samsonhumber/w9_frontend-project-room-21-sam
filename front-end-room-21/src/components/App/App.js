import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { useState, useEffect } from "react";
import { BioList, } from "../BioList/bioList";
import {useEffectFunction} from "../../hooks";

function App() {
  const [text, setText] = useState();

  function handleChange(e) {
    setText(e.target.value);
  }
  
  function handleDropdownBootcamp(e) {
    console.log("Bootcamp selected");
    setDropdownBootcamp(e.target.value);
  }

  function handleAdd() {
    console.log("The Search Button was clicked.");
    setSearchtext(text);
  }

  function handleDropdownRegion(e) {
    console.log("Region selected");
    setDropdownRegion(e.target.value);
  }

  const [dropdownRegion, setDropdownRegion, fetchRegionData, setDropdownBootcamp, dropdownBootcamp, fetchBootcampData, bioData, setSearchtext, searchtext, fetchNameSearchData] = useEffectFunction();

  useEffect(() => {
     fetchRegionData();
  }, [dropdownRegion]) 

  useEffect(() => {
    fetchBootcampData();
  }, [dropdownBootcamp])

  useEffect(() => {
    fetchNameSearchData();
  }, [searchtext])

  return (
    <main className="App">
      <Navbar />
      <div className="search-display">
        <Searchbar
          text={text}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
        <Dropdown
          handleDropdownSelect={handleDropdownRegion}
          handleDropdownBootcamp={handleDropdownBootcamp}
        />
      </div>
      <BioList bootcampers={bioData} />
    </main>
  );
}

export default App;
