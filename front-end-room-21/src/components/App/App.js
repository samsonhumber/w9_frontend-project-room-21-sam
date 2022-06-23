import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Yearbook from "../Yearbook/Yearbook.js";
import { filters } from "./filters";

function App() {

  return (
    <main className="App">
      <Navbar />
      <Yearbook filters={filters}/>
    </main>
  );
}

export default App;
