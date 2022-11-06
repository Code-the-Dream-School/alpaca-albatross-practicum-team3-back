import React, { useState } from "react";
import TodoListItem from "./TodoListItem";


const FavoritesPage = ({ useSemiPersistentState, todoList }) => {

  const [faveList, setFaveList] = useSemiPersistentState();
  const [starStatus, setStarStatus] = useState([]);
   
  
    //When star clicked on list, this function receives the todo and key and populates them into their own list that only has a star icon to check and uncheck.
    const handleStar = (e) => {
      let starList = [...starStatus];
      if (e.target.starStatus) {
        starList = [...starStatus, e.target.value];
      } else {
        starList.filter(starStatus.indexOf(e.target.value), 1);
      }
      setStarStatus(starList);
      };
  
  
    // unchecking Star button removes todo from list
  
      const removeStar = (id) => {
      const newFaveList = todoList.filter((todo) =>
        id !== todo.id);
      setFaveList(newFaveList)
    };
  
    return (
      <>      
      <ul>
          {faveList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              handleStar={handleStar}
              removeStar={removeStar}
            />
          ))} 
        </ul>
      </>
    );
  };
  
  export default FavoritesPage;