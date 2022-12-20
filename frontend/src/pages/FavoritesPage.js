import React from 'react';
import Speech from './Home/Speech';
import FavTodoList from '../components/FavTodoList';
import { useCookies } from 'react-cookie';

const FavoritesPage = (addToDo) => {
  const [cookies] = useCookies(['listID']);

  // create new Todolist component
  // it will show only the items in status favored
  // need a function to unfavore them
  // edit function is the same
  // delete function is the same
  return (
    <>
      <div id="favelist">
      <FavTodoList listID={cookies.listID} />
      </div>
      <Speech />
    </>
  );
};

export default FavoritesPage;
