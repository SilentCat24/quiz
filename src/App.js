import React,{useEffect, useState} from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Data from './questions.json';

function App() {
const [questions,setQuestions]=useState([]);
const [currentIndex,setCurrentIndex]=useState(0);
const [score,setScore]=useState(0);
const [submit,setSubmit]=useState('submit')
const [name,setName]=useState('btn');
const [width,setWidth]=useState(5)
const [result,setResult]=useState('');
const [bar,setBar]=useState(5)
  
// extracting Data
useEffect(()=>{
  const questions =Data.map((question)=>({
...question,
answers:[question.correct_answer, ...question.incorrect_answers].sort(()=>Math.random() - 0.5)

}))
setQuestions(questions);
},[]);

// answering section
const handleAnswer=(answer)=>{
  setName('btn-primary')
  setSubmit('onSubmit')
  if(answer === questions[currentIndex].correct_answer){
    setScore(score+1)   
  }
 if(answer === questions[currentIndex].correct_answer){
   setResult('true')
 }else{
   setResult('false')
 }
}
// next button question
const handleNextQuestion = () => {
  setCurrentIndex(currentIndex+1);
  setResult('')
  setSubmit('submit')
  setName('btn')
  setBar(bar+5)

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
name={name}
currentIndex={currentIndex}
submit={submit}
bar={bar}
/>


)}
</div>
):<div className='container'>Loading....</div>


  );
}




   
export default App;
