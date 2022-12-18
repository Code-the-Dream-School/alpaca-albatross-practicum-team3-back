import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import Speech from './Home/Speech';
import FavTodoList from '../components/FavTodoList';
import { useCookies } from 'react-cookie';

const FavoritesPage = (addToDo) => {
  const [cookies] = useCookies(['listID']);
  // console.log('all your fave are belong to us');

  // create new Todolist component
  // it will show only the items in status favored
  // need a function to unfavore them
  // edit function is the same
  // delete function is the same
  return (
    <>
      {/* <h1>Favorites</h1> */}
      <Speech />
      <FavTodoList listID={cookies.listID} />
    </>
  );
};

export default FavoritesPage;
