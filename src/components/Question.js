import React, {useState} from 'react';
import InputRadio from './InputRadio';

const Question = ({question, handleResponse}) => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(selectedOption)

        handleResponse({
            questionId: question.id,
            ...selectedOption
        })
    } 


    const getUserAnswer = () => {
        const answer = question.options.filter((option) => (option.isSelected))[0].value
        const hasFound = answer.toLowerCase() === question.correctAnswer.toLowerCase()
        return(
            <div className='results-message'>
                <h5 className={hasFound ? 'success-answer' : 'error-answer'} style={{margin: 0}}>{hasFound ? 'Correct!' : 'Incorrect!'}</h5>
                <p style={{margin: 0}}>Response is: <small>{question.correctAnswer}</small></p>
            </div>
        )
    }
   return (
       <div className="question-block ">
            <h3>{question.title}</h3>
            {
                question.options.map(inputOption => <InputRadio isComplete={question.isComplete} labelOption={inputOption} key={inputOption.id} refName={question.refName} setSelectedOption={setSelectedOption}/>)
            }          
            
            <button className="btn btn-default Submit-button" type="button" disabled={question.isComplete} onClick={handleClick}> Submit </button>
          
          { question.isComplete && getUserAnswer() }
        </div>
   );
};
 
export default Question;