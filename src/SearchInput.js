import React, {useState} from "react";

const SearchInput = ({ value, onChange}) => {
  const [displayValue, setDisplayValue] = useState(value);
  function handleChange(event) {
    setDisplayValue(event,target,value);
    onChange(event.target.value);
  }
   return (
   <input 
   type="search" 
   value={displayValue} 
   onChange={handleChange}
    />
   );
 };

export default SearchInput;