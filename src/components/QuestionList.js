import React from 'react';
import Question from './Question';

const Questionlist = ({questions, handleResponse}) => {
    const totalQuestions = questions.length;
    const allCompleted = questions.filter((e) => e.isComplete).length;
    const isAllCompleted = allCompleted === totalQuestions;
    const nextQuestion = questions.find((e) => e.isComplete === false);
    const successfulled = questions.filter((e) => e.successfull).length;
    const isAllCompletedClass = isAllCompleted ? " completed " : " incomplete "
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
            <hr className='question-block horizontal-rule' style={{marginTop: '15px'}}/>

            <div className={'question-block horizontal-rule'}>
                    {
                        isAllCompleted ?
                        <div className={isAllCompletedClass + " block-footer"}    >
                        <div className='score'>
                            <small className="success-answer"> Correct: {successfulled + '/' + totalQuestions     }</small>
                            <br/> 
                            <small className="error-answer"> Incorrect: { totalQuestions - successfulled + '/' + totalQuestions     } </small>
                        </div>
                        <button className='btn btn-default' type='reset' onClick={() => {localStorage.removeItem("listQuestions");window.location.reload(); }}>Try again</button>
                        </div>
                        :
                        <div class={isAllCompletedClass + "score"}>Progress : {allCompleted + '/' + totalQuestions}</div>

                    }

                
            </div>
       </div>
   );
};
 
export default Questionlist;





