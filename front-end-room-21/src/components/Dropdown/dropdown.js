import "./dropdown.css";

const region = [
  "Select a region",
  "West Midlands",
  //{id: 0, text:  value: null},
  //{id: 1, text:  value: "West%Midlands"
  "East Midlands",
  "Greater London",
  "North East",
  "North West",
  "South East",
  "South West",
  "East of England",
  "Yorkshire and the Humber",
];
const bootcamp = [
  "Select a bootcamp",
  "Cohort 1",
  "Cohort 2",
  "Cohort 3",
  "Cohort 4",
  "Cohort 5",
  "Cohort 6",
  "Cohort 7",
  "Cohort 8",
  "Cohort 9",
  "Cohort 10",
  "Cohort 11",
  "Cohort 12",
];
function Dropdown({handleDropdownSelect}) {
  return (
    <div className="dropdown-bars">
      <select name="region" className="dropdown-region" onChange={handleDropdownSelect}>
        {region.map((regions, index) => (
          <option key={index}> {regions}</option>
        ))}
      </select>
      <select name="bootcamp" className="dropdown-bootcamp">
        {bootcamp.map((cohort, index) => (
          <option key={index}> {cohort}</option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
