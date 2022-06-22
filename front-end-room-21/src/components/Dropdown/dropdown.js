import "./dropdown.css";

const region = [
  { text: "Select a region", value: " " },
  { text: "West Midlands", value: "West%Midlands" },
  { text: "East Midlands", value: "East%Midlands" },
  { text: "Greater London", value: "Greater%London" },
  { text: "North East", value: "North%East" },
  { text: "North West", value: "North%West" },
  { text: "South East", value: "South%East" },
  { text: "South West", value: "South%West" },
  { text: "East of England", value: "East%of%England" },
  { text: "Yorkshire and the Humber", value: "Yorkshire" },
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

function Dropdown({ handleDropdownSelect }) {
  return (
    <div className="dropdown-bars">
      <select
        name="region"
        className="dropdown-region"
        onChange={handleDropdownSelect}
      >
        {region.map((regions, index) => (
          <option key={index} value={regions.value} aria-label='dropdown menu region'>
            {regions.text}
          </option>
        ))}
      </select>
      <select name="bootcamp" className="dropdown-bootcamp" aria-label='dropdown menu cohort number'>
        {bootcamp.map((cohort, index) => (
          <option key={index}> {cohort}</option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
