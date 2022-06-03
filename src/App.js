import React,{useEffect, useState} from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Data from './questions.json';

function App() {
const [questions,setQuestions]=useState([]);
const [currentIndex,setCurrentIndex]=useState(0);
const [score,setScore]=useState(0);
const [showAnswers,setAnswers]=useState(false);
const [name,setName]=useState('btn');
const [result,setResult]=useState('');
  
useEffect(()=>{
  const questions =Data.map((question)=>({
...question,
answers:[question.correct_answer, ...question.incorrect_answers].sort(()=>Math.random() - 0.5)

}))
setQuestions(questions);

},[]);

const handleAnswer=(answer)=>{
  setName('btn-primary')
  if(answer === questions[currentIndex].correct_answer){
    setScore(score+1)
   
  }
 if(answer === questions[currentIndex].correct_answer){
   setResult('true')
 }else{
   setResult('false')
 }
 setAnswers(true);
}
const handleNextQuestion = () => {
  setCurrentIndex(currentIndex+1);
  setResult('')
  setAnswers(false);
  setName('btn')

}




  return (
    questions.length > 0 ? (
<div className='container'>
  {currentIndex >= questions.length ? (
<h1>You score is {score} </h1>): (
<Quiz handleAnswer={handleAnswer}
data={questions[currentIndex]}
result={result}
score={score}
handleNextQuestion={handleNextQuestion}
showAnswers={showAnswers}
name={name}

/>


)}
</div>
):<div className='container'>Loading....</div>


  );
}




   
export default App;
