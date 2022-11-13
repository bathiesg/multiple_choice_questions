import { useState } from "react";

const InputText = ({refName, setSelectedOption, isComplete, answer }) => {
    const [value, setValue] = useState(answer)  

    const handleChange = (event) => {    
        setValue(event.target.value);        
        setSelectedOption({
            answer: event.target.value,
        }) 
    }   
   
      return (
        <label>
            <input type="text"
                className="form-input"
                name={refName}
                value={value}
                onChange={handleChange} 
                disabled={isComplete}
                placeholder="result?"
            />
        </label>
      );
}

export default InputText