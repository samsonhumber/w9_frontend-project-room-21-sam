import "./dropdown.css";

function Dropdown({ handleDropdownSelect, category, options }) {
  return (
      <select
        name={category}
        className="dropdown-filter"
        onChange={handleDropdownSelect}
      >
        {options.map((item, index) => (
          <option key={index} className="select" value={item.value} aria-label={`dropdown menu ${category}`}>
            {item.text}
          </option>
        ))}
      </select>
  );
}
export default Dropdown;
