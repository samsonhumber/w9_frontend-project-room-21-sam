import { useState } from 'react'

const useRegion = function UseRegion() {
    const [dropDownRegion, setDropDownRegion] = useState("");
    const [bioData, setBioData] = useState([]);
  
    // load items
    const fetchRegionData = async () => {
        console.log("GET request from Region dropdown.");
        try {
          const url = "http://localhost:9000/profiles/?region=" + dropDownRegion;
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
  
    return [dropDownRegion, setDropDownRegion, bioData, fetchRegionData, setBioData];
};

const fetchData = function FetchData() {
  const [dropdownBootcamp, setDropdownBootcamp] = useState("");
  const [bioData, setBioData] = useState([]);

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
  return [setDropdownBootcamp, dropdownBootcamp, bioData, fetchBootcampData, setBioData];
}


export {useRegion, fetchData};

