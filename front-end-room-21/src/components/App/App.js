// import {react} from "rr"
import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Searchbar from "../Searchbar/Searchbar.js";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Searchbar />
      <Biography />
    </main>
  );
}

export default App;
