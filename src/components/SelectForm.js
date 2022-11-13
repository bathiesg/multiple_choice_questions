import { useState } from "react";

const SelectForm = ({options, refName, setSelectedOption, isComplete }) => {
    const [value, setValue] = useState('')  

    const handleChange = (event) => {   
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const optionid =  el.getAttribute('optionid');  
        setValue(event.target.value); 
       
        setSelectedOption({
            optionId: optionid,
            answer: event.target.value,
        }) 
    }   
   
      return (
        <label>
            <select value={value} onChange={handleChange} disabled={isComplete}>  
                {options.map(option => <option optionid={option.id} key={option.id} value={option.value}>{option.value}</option>)}          
            </select>
        </label>
      );
}

export default SelectForm