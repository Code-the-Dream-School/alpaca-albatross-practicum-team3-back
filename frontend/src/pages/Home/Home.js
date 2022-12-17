import React, { useState } from "react";
import TodoList from "../../components/TodoList";
import { useLocation } from 'react-router';
import Speech from "./Speech";


import { useCookies } from 'react-cookie';

function Home (useSemiPersistentState) {

  // msg will be {userName}?
  //const msg = 'Mikey';
  const msg = JSON.parse(localStorage.getItem('user'));
  // const location = useLocation();
  //console.log('location', location.state.listID);
  const [cookies] = useCookies(['listID']);

  const [spokenTodo, setSpokenTodo] = useState('');

  const handleSpokenTodo = (todo) => {
    setSpokenTodo(todo)
  };

  const convertTranscript = (string) => { 
    const arr = string.split(' ');
    handleSpokenTodo(arr.slice(1, (arr.length-1)));
  };

  return (
    <>
      <h1 className='welcome'>Welcome {msg}!</h1>
      <h2 className='question'>What would you like to get done today?</h2>
      <Speech handleSpokenTodo={handleSpokenTodo}/>
      <TodoList
        useSemiPersistentState={useSemiPersistentState}
        listID={cookies.listID}
        spokenTodo={spokenTodo}
        convertTranscript={convertTranscript}
      />
    </>
  );
}
export default Home;
