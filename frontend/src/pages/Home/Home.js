import React from "react";
import TodoList from "../../components/TodoList";
import Speech from "./Speech";


import { useCookies } from 'react-cookie';

function Home (useSemiPersistentState) {

  const msg = JSON.parse(localStorage.getItem('user'));
  // const location = useLocation();
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
