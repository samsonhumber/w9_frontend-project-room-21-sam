// import {react} from "rr"
import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { bootcampers } from "../../data.js";
import { useState, useEffect } from 'react';

function App() {
  //const [allData, setAllData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        console.log("running fetch");
        try {
          const response = await fetch(
            `http://localhost:7000/profiles`
          );
          const responseJSON = await response.json();
          const responseData = responseJSON.payload;
          //setAllData(responseData);
          console.log(responseData);
        }
        catch (err){
          const responseData = "Sorry, we couldn't find the person you wanted."
          console.log(responseData);
        } 
      }
      fetchData();
    }, []);

  return (
    <main className="App">
      <Navbar />
      <div className="search-display">
        <Searchbar />
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
