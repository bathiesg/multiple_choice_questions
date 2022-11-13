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
        currentQuestion = { ...currentQuestion, isComplete: !currentQuestion.isComplete }
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
          For doing this, LOM brings you a document with the specific requirements of the program, which content is:
            <ul>
              <li>
                The program must ask the user at least ten questions with only one correct answer.
              </li>
              <li>
                The questions can be of any kind: a calculation, choose one from multiple choices, text answer, or whatever. But always with a single correct answer.<br/>For example:
                <ul>
                  <li><i>"What is the current year?"</i> with a number input.</li>
                  <li><i>"12 / 4 ="</i> and a selector with options 4, 3, 5.</li>
                  <li><i>"What is the surname of the leading creator of relativity theory called Albert?"</i> with a text inputfor type Einstein</li>
                </ul>
              </li>
              <li>
                The program must contain at least two different kinds of questions.
              </li>
              <li>
                The user will have only one chance to answer each question.
              </li>
              <li>
                There must be feedback for the user's answer, and if it's wrong, the program must display the correct answer.
              </li>
              <li>
                The program must track user progress to display the answered questions.
              </li>
              <li>
                When the user answers all the questions, the program must display the result of the tests giving him a value of his worthiness.
              </li>
          </ul>
        </div>
        
        </div>
        <Questionlist questions={listQuestions} handleResponse={handleResponse}/>
      </main>
    </div>
  );
}

export default App;
