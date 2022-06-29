import { useState } from 'react'

const bioState = function BioState() {
  const [bioData, setBioData] = useState([]);
  return [bioData, setBioData];
}

const useRegion = function UseRegion() {
    const [dropdownRegion, setDropdownRegion] = useState("");
    const [bioData, setBioData] = bioState();
  
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
  
    return [dropdownRegion, setDropdownRegion, fetchRegionData];
};

const fetchData = function FetchData() {
  const [dropdownBootcamp, setDropdownBootcamp] = useState("");
  const [bioData, setBioData] = bioState();

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
  return [setDropdownBootcamp, dropdownBootcamp, fetchBootcampData];
}


export {useRegion, fetchData, bioState };

