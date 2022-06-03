import React,{useState} from 'react';
import './Quiz.css';


function Quiz({result,handleAnswer,name,showAnswers,score,handleNextQuestion,data:{question,correct_answer,answers,difficulty}}) {
  const [star,setStar]=useState('');
 
  const [btnName,setBtnName]=('btn');



  return (
    <div className='container'>
<h3>{difficulty}</h3>
      <h3>{score}</h3>
    <h3>{result}</h3>
    <div className='question'>
    <h2>{question}</h2>
      </div>
    
      <div className='button'>
        {
        answers.map((answer,idx)=>{
          const specialClassName = showAnswers ? (
            answer === correct_answer ? "green-button": "red-button"
        ) : "";
return(
  <button key={idx} className={`${name} ${specialClassName}`} 
  onClick={()=>handleAnswer(answer)}
  > {answer}</button>
)

        })}
    
      </div>
      {showAnswers &&(
        <button onClick = {handleNextQuestion} className={`${btnName}`}>Next Question</button>
    
      )}
      
    </div>
  )
}

export default Quiz