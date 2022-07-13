import "./Yearbook.css"
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";
import { BioList } from "../BioList/bioList";
import  useFilters  from "../../hooks/useFilters.js";


function Yearbook({ filters }) {
  const [handleChange, handleDropdownSelect, handleSearch, bioData] = useFilters();
  
  return (<div>
      <Searchbar
      handleChange={handleChange}
      handleSearch={handleSearch}
    />
    <div className='dropown-bars'>
    {filters.map((menu) => (
      <Dropdown handleDropdownSelect={handleDropdownSelect} category={menu.category} options={menu.data}/>
    ))}
    </div>
    <BioList bootcampers={bioData} />
    </div>)
}

export default Yearbook;