// import {react} from "rr"
import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { bootcampers } from "../../data.js";

function App() {
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
