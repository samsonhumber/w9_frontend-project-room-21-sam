// import {react} from "rr"
import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Dropdown/>
      <Biography />
    </main>
  );
}

export default App;
