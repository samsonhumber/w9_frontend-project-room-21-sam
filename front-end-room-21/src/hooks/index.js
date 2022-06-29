import { useState, useEffect } from 'react'

const useRegion = function setAlert() {
    const [dropDownRegion, setDropDownRegion] = useState("");
    const [bioData, setBioData] = useState([]);
  
    // load items
    const loadItems = async () => {
      try {
        const items = await axios.get("/item");
        setItems(items.data);
      } catch (error) {
        setAlert({
          showAlert : true,
          severity  : "error",
          message   : "Customer loading failed!",
        });
      }
    };
  
    return [items, loadItems];
  };