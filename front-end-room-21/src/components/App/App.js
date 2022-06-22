import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { bootcampers } from "../../data.js";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState();
  const [searchtext, setSearchtext] = useState();

  function handleChange(e) {
    setText(e.target.value);
    /* Updates every time you type into the Searchbar input. When you setText, that is the current value of whatever is typed there. */
  }

  function handleAdd() {
    console.log("The Search Button was clicked.");
    setSearchtext(text);
    /* This is performed onClick in the Searchbar component, on the 'search' button. When you setSearchText, it sets a string value from the input bar as searchtext. We can then take this searchtext string, and send it to the API in a GET request for anything that contains or matches the searchtext string. */
  }

  console.log(searchtext);
  //const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("running fetch");
      try {
        const response = await fetch(`http://localhost:7000/profiles`);
        const responseJSON = await response.json();
        const responseData = responseJSON.payload;
        //setAllData(responseData);
        console.log(responseData);
      } catch (err) {
        const responseData = "Sorry, we couldn't find the person you wanted.";
        console.log(responseData);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="App">
      <Navbar />
      <div className="search-display">
        <Searchbar
          text={text}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
        <Dropdown />
      </div>
      <div className="bootcamper-display">
        {bootcampers.map((item) => (
          <Biography
            id={item.id}
            bcName={item.name}
            avatar={item.avatar}
            region={item.region}
            jobTitle={item.jobTitle}
            desc={item.desc}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
