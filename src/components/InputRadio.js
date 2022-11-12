import React from 'react';


const InputRadio = ({labelOption, refName, setSelectedOption, isComplete }) => {    

    const onValueChange = (event) => {
        setSelectedOption({
            optionId: labelOption.id,
            answer: event.target.value,
        })
      }

      let labelBg = ''
      if(isComplete){
        if(labelOption.isCorrect) {
            labelBg = 'success-answer'
        } else if(labelOption.isSelected) {
            labelBg = 'error-answer'
        }
      }
   
    return(
        <div>
            <label className={labelBg}>
                <input
                    disabled={isComplete}
                    name={refName}
                    type="radio"
                    value={labelOption.value}    
                    {...(labelOption.isSelected ? { checked: 'checked' } : {})}
                    onChange={onValueChange}                     
                />
                {labelOption.value}
            </label>
            <br/>
        </div>
        )
    }  
    /*


    */
  

  export default InputRadio