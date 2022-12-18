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

  return (
   <>
      <div>
        <div id="intro">
      <h1 className='welcome'>Welcome {msg}!</h1>
        <h2 className='question'>What would you like to get done today?</h2>
        </div>
      {/* <Speech /> */}
      <TodoList
        useSemiPersistentState={useSemiPersistentState}
        listID={cookies.listID}
      />
    </div>
      <Speech />
</>
  );
}
export default Home;
