import React,{useState} from 'react'
import './style.css'
import galaxy from '../../img/pexels-adi-k-3646377.jpg';
import {questions} from './quiz'
import {Final} from './Final'

export function Page() {
const [state,setstate]=useState(0)
let [count,setcount]=useState(0)
let [s,sets]=useState(1)
let [score,setscore]=useState(0)
let [tr,settr]=useState(false)
let [click,setclick]=useState(false)
let [cli,setcli]=useState(false)

const next_question=()=>{
setclick(false)
settr(false)
setcli(false)
setstate(questions.length-1?state+1:0)
sets(s+=1)
setcount(count+=1)
}
const previous_question=()=>{
  setclick(false)
  settr(false)
  setstate(state===0?0:state-1)
  s>1?sets(s-=1):sets(1)
  if(count>0){
    setcount(count-=1)
  }else{
    setcount(0) 
  }
}
const ans=(ind)=>{
  setclick(true)
  questions[count].correctanswer===ind?settr(true):settr(false)
 setscore( ind===questions[count].correctanswer?score+=1:score)
if(ind===questions[count].correctanswer){
settr(true)
}else if(ind!==questions[count].correctanswer){
settr(true)
}
}

 return (
    <div className='conteiner'>
        <img src={galaxy} className='im2'/>
        { count>questions.length-1?(    
     <Final data={score} c={count}  b={s}/>
          ):(
            <section className='quiz'>
        <div className='two'>
 <p>Question Number: {s}/{questions.length}</p> 
 <p>Question: {questions[state].question}</p>
          </div>
          <div className='btn2'>  
 <button onClick={previous_question} disabled='true'>Previous</button>
 <button onClick={next_question}disabled={!click}>Next</button>
 </div>
     <div className='three'>
       {questions[count].answers.map((elem,index)=>{
        return (
        <li    key={index} onClick={()=>ans(index)}  className={`ulli ${questions[count].correctanswer===index && tr===true?'truetext':'' }` } disabled={!cli} >{elem}</li> 
        )
       })}
     </div>
        </section>
        )}
    </div>
  )
}
