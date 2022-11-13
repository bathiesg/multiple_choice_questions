import React from 'react';
import './App.css';
import Header from './components/Header';
import Questionlist from './components/QuestionList';
// import Radio from './components/Radio';
import Data from './data.json'; 

import useLocalStorage from './components/UseLocalStorage';

function App() {
  const [ listQuestions, setLisQuestions ] = useLocalStorage("listQuestions", Data);

  const handleResponse = ({optionId, questionId, answer}) => {
    console.log({optionId, questionId, answer})
    let mapped = listQuestions
    .map(currentQuestion => {
      if (currentQuestion.id === questionId) {
        currentQuestion = { 
          ...currentQuestion, 
          isComplete: !currentQuestion.isComplete,
          answer: answer,
          successfull: answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()
        }
        if(optionId){
          currentQuestion.options = currentQuestion.options.map(option => {
            option.isSelected = false;
            if (option.id === optionId) {
              option.isSelected = true;
            }
            return option;
          })
        }
      }
      return currentQuestion;
    })
 
    setLisQuestions(mapped);
  }

  return (
    <div className="App">
      <Header />  
    
      <main className='main'>
        <div>
        <div className='question-block description'>
        The questions will be displayed one by one. Tick the answer you think is the right one and click on the "submit" button to validate your answer. Once you validate your answer you will not be able to change it again.
        When you answer all the questions, a list of all your answers will be displayed with a summary of the results.
        <br/>
        Good luck &#129310;&#127996;
        </div>
        
        </div>
        <Questionlist questions={listQuestions} handleResponse={handleResponse}/>
      </main>
    </div>
  );
}

export default App;
