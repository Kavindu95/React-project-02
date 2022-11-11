import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Components/Form';
import Todolist from './Components/Todolist';





export default function App() {
  const[inputText, setInputText] = useState('');
  const[todos, setTodos]= useState([]);
  const[status, setStatus] = useState('all');
  const [filterdTodos, setfilteredTodos] = useState([]);
  return (
    <div>
      <h1 align='center'>Ceylon Book Store </h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <Todolist setTodos={setTodos} todos={todos} />
      
     
    </div>
  )
}
