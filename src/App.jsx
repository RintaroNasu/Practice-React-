import React from 'react';
import { BrowserRouter,Link} from 'react-router-dom';
import {Router } from './router/Router';
import { useState,useCallback } from 'react';
import './App.css';
import {ChildArea} from './components/ChildArea';
import { StyledComponents } from './components/StyledComponents';
import axios from 'axios';


export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) =>setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false),[]);
  const onClickUsers = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const onClickUser1 = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users?id=1")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText}/>
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} close={onClickClose}/>
      </div>
      <div>
      </div>
      <BrowserRouter>
        <div className='transition'>
          <Link to="/">Home</Link>
          <br /> 
          <Link to="/page1">Page1</Link> 
          <br /> 
          <Link to="/page2">Page2</Link>    
        </div>
        <div>
          <button onClick={onClickUsers}>users</button>
          <button onClick={onClickUser1}>id=1のuser</button>
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
}
