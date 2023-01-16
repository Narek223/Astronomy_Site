import React,{useEffect}from 'react';
import { Routes, Route,useLocation} from "react-router-dom";
import {Home} from "./pages/homepage/Home";
import {About_us} from './pages/About/About_us'
import { Header } from './pages/header/Header';
import {Sign} from './pages/signup/Sign';
import {Log} from './pages/signup/Log';
import {Page} from './pages/quiz/Page';
import {Disc} from './pages/Discover/Disc';
import {Error404} from './pages/Error/Error404';
import {questions} from './pages/quiz/quiz'

export default function App() {
let location = useLocation();

window.oncontextmenu=(()=>{
  return 
})

useEffect(()=>{
  if(location.pathname!=="/quiz"){
  questions.sort((a, b) => 0.5 - Math.random());
  }
},[location])




  return (
    <div>
      
   <Header/>
  <Routes>

  <Route path='/' element={<Home />} />
  <Route path='/Discover' element={<Disc/>}/>
  <Route path='/quiz/*' element={<Page/> }/>
  <Route path='/about' element={<About_us />} />
  <Route path='/sign' element={<Sign/> }/>
  <Route path='/login' element={<Log/> }/>
  <Route path='*' element={<Error404/> }/>
 
  </Routes>

    </div>
  )
}
