import React from 'react';
import Question from './Question';

const Questionlist = ({questions, handleResponse}) => {
    const totalQuestions = questions.length
    const allComplete = questions.filter(e => e.isComplete)
    const isAllCompleted = allComplete.length ===  totalQuestions
    const nextQuestion = questions.find(e => e.isComplete === false)
    const successfulled = questions.filter(e => e.successfull).length
    console.log(successfulled)
   return (
       <div>
        
            {
                isAllCompleted ?
                questions.map(questionElement => {
                    return (
                        <Question key={questionElement.id} question={questionElement} handleResponse={handleResponse}/>
                    )
                }):
                <Question key={nextQuestion.id} question={nextQuestion} handleResponse={handleResponse}/>
            }
            <hr className='question-block' style={{marginTop: '15px'}}/>

            <div className='question-block' style={{display: 'flex', justifyContent: 'end'}}>
                <div className="score" style={{background: 'darkslategray', padding: '7.5px 15px'}}>
                    <div>Score : {allComplete.length + '/' + totalQuestions}</div>
                    {
                        isAllCompleted && 
                        <small> 
                            <span className="success-answer"> correct: {successfulled + '/' + totalQuestions     }</span>
                            <br/> 
                            <span className="error-answer"> incorrect: { totalQuestions - successfulled + '/' + totalQuestions     } </span>
                        </small>
                    }
                </div>
                
            </div>
       </div>
   );
};
 
export default Questionlist;





