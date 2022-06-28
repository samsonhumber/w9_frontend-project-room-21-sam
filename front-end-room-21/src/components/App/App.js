import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { useState, useEffect } from "react";
import { BioList } from "../BioList/bioList";

function App() {
  const [text, setText] = useState();
  const [searchtext, setSearchtext] = useState();
  const [dropdownRegion, setdropDownRegion] = useState("");
  const [dropdownBootcamp, setDropdownBootcamp] = useState("");
  const [bioData, setBioData] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleDropdownSelect(e) {
    console.log("Region selected");
    setdropDownRegion(e.target.value);
  }

  function handleDropdownBootcamp(e) {
    console.log("Bootcamp selected");
    setDropdownBootcamp(e.target.value);
  }

  function handleAdd() {
    console.log("The Search Button was clicked.");
    setSearchtext(text);
  }

  useEffect(() => {
    async function fetchRegionData() {
      console.log("GET request from Region dropdown.");
      try {
        const url = "http://localhost:9000/profiles/?region=" + dropdownRegion;
        console.log(url);
        const response = await fetch(url);
        const responseJSON = await response.json();
        const responseData = responseJSON.payload;
        console.log(responseData);
        setBioData(responseData);
      } catch (err) {
        const responseData = "Sorry, we couldn't find the data you wanted.";
        console.log(responseData);
      }
    }
    fetchRegionData();
  }, [dropdownRegion]);

  useEffect(() => {
    async function fetchBootcampData() {
      console.log("GET request from Cohort dropdown.");
      try {
        const url =
          "http://localhost:9000/profiles/?Bootcampnumber=" + dropdownBootcamp;
        console.log(url);
        const response = await fetch(url);
        const responseJSON = await response.json();
        const responseData = responseJSON.payload;
        console.log(responseData);
        setBioData(responseData);
      } catch (err) {
        const responseData = "Sorry, we couldn't find the data you wanted.";
        console.log(responseData);
      }
    }
    fetchBootcampData();
  }, [dropdownBootcamp]);

  useEffect(() => {
    async function fetchNameSearch() {
      console.log("GET request from searchbar entry.");
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
        <Dropdown
          handleDropdownSelect={handleDropdownSelect}
          handleDropdownBootcamp={handleDropdownBootcamp}
        />
      </div>
      <BioList bootcampers={bioData} />
    </main>
  );
}

export default App;
