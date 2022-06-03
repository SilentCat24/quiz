import React,{useState} from 'react';
import './Quiz.css';


function Quiz({result,handleAnswer,submit,name,showAnswers,bar,score,handleNextQuestion,currentIndex,
  data:{question,correct_answer,answers,difficulty}}) {
  return (
    <div className='container'>.
    
      <div className='bar'  style={{width:`${bar}%`}}></div>
      {/* header part */}
   <header>
   

            <h3 className='difficulty'>Difficulty:{difficulty}</h3>
        
      <h3 className='score'>Score:{score}</h3>
      <br/>
    </header>
    <div className='question'>
    <h2>{question}</h2>
      </div>
      <h3 className='result'>{result}</h3>
    {/* answer button */}
      <div className='button'>
        {
        answers.map((answer,idx)=>{
        return(
    <button key={idx} className={`${name}`} 
  onClick={()=>handleAnswer(answer)}
    > {answer}</button>
)})}
</div>
     {/* next question button */}
        <button onClick = {handleNextQuestion} className={`${submit}`}>Next Question</button>
    
    
      
    </div>
  )
}

export default Quiz