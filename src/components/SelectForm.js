import { useState } from "react";

const SelectForm = ({options, refName, setSelectedOption, isComplete, answer }) => {
    const [value, setValue] = useState(answer)  

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
            <select name={refName} value={value} onChange={handleChange} disabled={isComplete} className="form-input">  
                <option  optionid="0" key="0" value="" disabled>Choose an option</option>
                {options.map(option => <option  optionid={option.id} key={option.id} value={option.value || answer}>{option.value}</option>)}          
            </select>
        </label>
      );
}

export default SelectForm