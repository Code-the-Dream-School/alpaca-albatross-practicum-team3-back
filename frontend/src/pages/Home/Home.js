import React from 'react';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router';

function Welcome(useSemiPersistentState) {
  // msg will be {userName}?

  //const msg = 'Mikey';
  const msg = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  // console.log('location', location.state.listID);

  return (
    <>
      <h1 className='welcome'>Welcome {msg}!</h1>
      <h2 className='question'>What would you like to get done today?</h2>
      <TodoList
        useSemiPersistentState={useSemiPersistentState}
        listID={location.state.listID}
      />
    </>
  );
}
export default Welcome;
