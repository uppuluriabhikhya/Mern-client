import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Login from './component/Login'
import TodoList from './component/TodoList';
import Feedback from './component/Feedback';
import './index.css'
import {BrowserRouter as Router,
  Routes,
  Link,
  Route} from 'react-router-dom'
import Register from './component/Register';
import Mycomponent from './Mycomponent';
import Example from './Example';
const root =document.getElementById('root')//root id from index.html
const VirtualRoot = ReactDOM.createRoot(root);


VirtualRoot.render(
  <Router>
  <div>  
    <Header/>
  </div>
    <Feedback/>
  <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
)

