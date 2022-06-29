import { useState } from 'react'

const useEffectFunction = function UseFunction() {
    const [dropdownRegion, setDropdownRegion] = useState("");
    const [dropdownBootcamp, setDropdownBootcamp] = useState("");
    const [bioData, setBioData] = useState([]);;
    const [searchtext, setSearchtext] = useState();
  
    // load items
    const fetchRegionData = async () => {
        console.log("GET request from Region dropdown.");
        try {
          const url = "http://localhost:9000/profiles/?region=" + dropdownRegion;
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
    };

    const fetchBootcampData = async () => {
      console.log("GET request from Cohort dropdown.");
        try {
          const url =
            "http://localhost:9000/profiles/?Bootcampnumber=" + dropdownBootcamp;
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
  
    const fetchNameSearchData = async () => {
      console.log("GET request from searchbar entry.");
      try {
        const url = "http://localhost:9000/profiles/?name=" + searchtext;
        console.log(url);
        const response = await fetch(url);
        const responseJSON = await response.json();
        const responseData = responseJSON.payload;
        console.log(responseData);
        setBioData(responseData);
      } catch (err) {
        const responseData = "Sorry, we couldn't find the person you wanted.";
        console.log(responseData);
      }
    }

    return [dropdownRegion, setDropdownRegion, fetchRegionData, setDropdownBootcamp, dropdownBootcamp, fetchBootcampData, bioData, setSearchtext, searchtext, fetchNameSearchData];

};

export {useEffectFunction};

