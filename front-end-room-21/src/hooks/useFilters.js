import { useState, useEffect } from 'react'

const useFilters = function UseFilters() {
    const [text, setText] = useState();
  const [requestEntry, setRequestEntry] = useState({});
  const [bioData, setBioData] = useState([]);

  function handleChange(e) {
      setText(e.target.value);
      console.log(text);
  }
  
  function handleDropdownSelect(e) {
      console.log("Category selected");
      const newRequestEntry = {...requestEntry};
      newRequestEntry[e.currentTarget.name] = e.target.value;
      console.log(e.currentTarget.name);
      setRequestEntry(newRequestEntry);
      // I now want the requestEntry object to be of form {name: {text}, category1: {category1state}, category2...}
  }
  
  function handleSearch() {
      console.log("The Search Button was clicked.");
      const newRequestEntry = {...requestEntry};
      newRequestEntry.name = text;
      setRequestEntry(newRequestEntry);
  }

  function makeUrl(requestEntry) {
    const keys = Object.keys(requestEntry);
    let url = `http://localhost:9000/profiles/?`;
    keys.forEach((key, index) => {
      url += `${String(key)}=${requestEntry[String(key)]}&`;
    })
    return url.slice(0, -1);
  }

  useEffect(() => {
      async function fetchCategoryData() {
        console.log("GET request from a dropdown or search bar.");
        const url = makeUrl(requestEntry);
        console.log(url);
        try {         
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
    return [handleChange, handleDropdownSelect, handleSearch, bioData]
}

export default useFilters