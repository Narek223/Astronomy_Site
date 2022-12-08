import React from 'react';
import { Routes, Route} from "react-router-dom";
import {Home} from "./pages/homepage/Home";
import {About_us} from './pages/About/About_us'
import { Header } from './pages/header/Header';
import {Sign} from './pages/signup/Sign';
import {Log} from './pages/signup/Log';
import {Page} from './pages/quiz/Page';
import {Disc} from './pages/Discover/Disc';

export default function App() {
  
window.oncontextmenu=(()=>{
  return false
})

  return (
    <div>
   <Header/>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Discover' element={<Disc/>}/>
  <Route path='/quiz' element={<Page/> }/>
  <Route path='/about' element={<About_us />} />
  <Route path='/sign' element={<Sign/> }/>
  <Route path='/login' element={<Log/> }/>
  </Routes>
    </div>
  )
}
