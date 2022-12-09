import React, { useState } from "react";
import TodoList from "../../components/TodoList";
import { useLocation } from 'react-router';
import Speech from "./Speech";



function Welcome(useSemiPersistentState) {

const [spokenTodoItem, setSpokenTodoItem] = useState('');
const handleSpokenTodo = (spokenMsg) => {
    setSpokenTodoItem(spokenMsg)
}

  // msg will be {userName}?
  //const msg = 'Mikey';
  const msg = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  console.log('location', location.state.listID);

  return (
    <>
      <h1 className='welcome'>Welcome {msg}!</h1>
      <h2 className='question'>What would you like to get done today?</h2>
      <Speech spokenTodoItem={spokenTodoItem} handleSpokenTodo={handleSpokenTodo}/>
      <TodoList
        useSemiPersistentState={useSemiPersistentState}
        listID={location.state.listID}
        spokenTodoItem={spokenTodoItem}
      />
    </>
  );
}
export default Welcome;
