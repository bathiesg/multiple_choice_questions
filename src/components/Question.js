import React, {useState} from 'react';
import InputRadio from './InputRadio';
import SelectForm from './SelectForm';
import InputText from './InputText';

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

    const formSelector = () => {
        switch(question.inputType) {
            case 'radio':
            return question.options.map(inputOption => <InputRadio isComplete={question.isComplete} labelOption={inputOption} key={inputOption.id} refName={question.refName} setSelectedOption={setSelectedOption}/>)
            case 'select':
            return <SelectForm options={question.options} isComplete={question.isComplete} refName={question.refName} setSelectedOption={setSelectedOption} answer={question.answer}/>
            case 'text':
                return <InputText isComplete={question.isComplete} refName={question.refName} setSelectedOption={setSelectedOption} answer={question.answer}/>
            default:
            return null
        }
    }
    const getUserAnswer = () => {
        return(
            <div className='results-message'>
                <h5 className={question.successfull ? 'success-answer' : 'error-answer'} style={{margin: 0}}>{question.successfull ? 'Correct!' : 'Incorrect!'}</h5>
                <p style={{margin: 0}}>Response is: <small>{question.correctAnswer}</small></p>
            </div>
        )
    }
   return (
       <div className="question-block ">
            <h3>{question.title}</h3>
            <form style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
                { formSelector() }          
                <button className="btn btn-default Submit-button" type="button" onClick={handleClick}> Submit </button>
            </form>
          { question.isComplete && getUserAnswer() }
        </div>
   );
};
 
export default Question;