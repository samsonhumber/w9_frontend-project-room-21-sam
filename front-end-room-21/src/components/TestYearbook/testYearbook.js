import Navbar from '../Navbar/navbar.js';
import {useState, useEffect} from 'react'
import Searchbar from '../Searchbar/Searchbar.js'
import {BioList} from '../BioList/bioList.js'
import Dropdown from '../Dropdown/dropdown.js'


function TestYearbook({ filters }) {
    console.log(filters);
    const [text, setText] = useState();
    const [requestEntry, setRequestEntry] = useState({});
    const [bioData, setBioData] = useState([]);

    function handleChange(e) {
        setText(e.target.value);
        console.log(text);
    }
    
    function handleDropdownSelect(e) {
        console.log("Category selected");
        console.log(e.currentTarget.name)
        setRequestEntry({category: e.currentTarget.name, value: e.target.value});
        console.log(requestEntry);
    }
    
    function handleSearch() {
        console.log("The Search Button was clicked.");
        console.log({category: "name", value: text});
        setRequestEntry({category: "name", value: text});
    }

    useEffect(() => {
        async function fetchCategoryData() {
          console.log("GET request from a dropdown or search bar.");
          try {
            const url = "http://localhost:9000/profiles/?" + requestEntry.category + "=" + requestEntry.value;
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
        fetchCategoryData();
      }, [requestEntry]);

    return (<div>
        <Searchbar
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <Dropdown handleDropdownSelect={handleDropdownSelect} category={filters[0].category} options={filters[0].data}/>
      <BioList bootcampers={bioData} />
      </div>)
}

export default TestYearbook;