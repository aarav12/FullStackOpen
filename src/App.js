import React from 'react';
import {useState} from 'react';


const Stats=(props)=>{
  if(props.total===0){
      return (
          <h1>No feedback given</h1>
      )
  }
  return (
   <div>
   <p>good {props.good}</p>
   <p>neutral {props.neutral}</p>
   <p>bad {props.bad}</p>
   <p>all {props.total}</p>
   <p>averge {props.score}</p>
   <p>positive{props.percent*100} </p>
   </div>
  )
}

const Button=({handleclick,text})=>{
  return (
    <button onClick={handleclick}>
      {text}
    </button>
  )
}

const App = () => {
  
  const [neutral,setneutral]=useState(0);
  const [good,setgood]=useState(0);
  const [bad,setbad]=useState(0);
 
  const handleneutral=()=>{
    setneutral(neutral+1);
  }
  const handlegood=()=>{
    setgood(good+1);
  }
  const handlebad=()=>{
    setbad(bad+1);
  }
  var total=good+bad+neutral
  var percent=good/total;
  var score=(good-bad)/total
  return (
    <div>
    <h1>Give feedback</h1>
    
    <Button handleclick={handleneutral} text="neutral"/>
    <Button handleclick={handlegood} text="good"/>
    <Button handleclick={handlebad} text="bad"/>

     
    <Stats good={good} bad={bad} neutral={neutral} percent={percent} score={score} total={total}/>

    </div>
  )

}

export default App