import {Routes, Route  } from "react-router-dom";

import './App.css';
import React,{useState} from 'react';
import Form from './components/Form'
import FormList from "./components/FormList";
import FormDetails from "./components/FormDetails";


function App() {

  const [tasks, setTasks] = useState([]);
  const addTask =(task) =>{
    setTasks([...tasks,task])
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormList tasks={tasks}/>}/>
        <Route path="/form" element={<Form addTask={addTask}/>}/>
        <Route path="/formDetails/:id" element={<FormDetails tasks={tasks}/>} />
      </Routes>
     
    </div>
  );
}

export default App;
