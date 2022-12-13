import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import Speech from './Home/Speech';

const FavoritesPage = (addToDo) => {
  console.log('all your fave are belong to us');

  // this ugly. How not? Want input, list with 2 icons (star and edit). faveList.push(todoListItem that toggle=true) faveList = todoList.filter?
  return (
    <>
      <h1>Favorites</h1>
      <AddTodoForm />
      <Speech />
    </>
  );
};

export default FavoritesPage;

// The handleStar function could change the state, copy the faveTodo.title, and then send to faveList. Icon needs to change from empty star to filled star.
// const [starStatus, setStarStatus] = useState([]);
// const [faveList, setFaveList] = useSemiPersistentState()

// const handleStar = (e) => {
//    on (e) change starStatus, label it faveTodo, and fill the star
// };
// then maybe
//   const addFaveTodo = (faveTodo) =>{
// setFaveList([...faveList, faveTodo])
// send to FavoritesPage};

//
//   <>
//       <ul >
//           {faveList.map((faveTodo) => (
//             <FaveItem
//             key={todo.id}
//             todo={faveTodo.title}
//             handleStar={handleStar}
//             removeStar={removeStar}
//             />
//           ))}
//         </ul>
// </>
