import React from 'react';
import Question from './Question';

const Questionlist = ({questions, handleResponse}) => {
   return (
       <div>
           {questions.map(questionElement => {
               return (
                <Question key={questionElement.id} question={questionElement} handleResponse={handleResponse}/>
               )
           })}
       </div>
   );
};
 
export default Questionlist;