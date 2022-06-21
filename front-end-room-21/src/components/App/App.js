// import {react} from "rr"
import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";

const bootcampers = [
  { name: "Jim Halpert", id: 1 },
  { name: "Pam Beasley", id: 2 },
  { name: "Dwight Schrute", id: 3 },
  { name: "Michael Scott", id: 4 },
  { name: "Ron Swanson", id: 5 },
];

function App() {
  return (
    <main className="App">
      <Navbar />
      <div>
        <Searchbar />
        <Dropdown />
      </div>
      <div>
        {bootcampers.map((item) => (
          <Biography id={item.id} bcName={item.name} />
        ))}
      </div>
    </main>
  );
}

export default App;
