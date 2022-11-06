import React, { useState } from "react";
import FaveItem from "./FaveItem.js";



const FavoritesPage = ({ useSemiPersistentState, todoList, FaveItem }) => {

  const [faveList, setFaveList] = useSemiPersistentState();
  const [starStatus, setStarStatus] = useState([]);
   
  
    //this function receives the todo.id and key and populates them into faveList
  
    const handleStar = (e) => {
      let starList = [...starStatus];
      if (e.target.starStatus) {
        starList = [...starStatus, e.target.value];
      } else {
        starList.filter(starStatus.indexOf(e.target.value), 1);
      }
      setStarStatus(starList);
      };
  
  
    // unchecking Star button removes todo from list. 
  
      const removeStar = (id) => {
      const newFaveList = todoList.filter((todo) =>
        id !== todo.id);
      setFaveList(newFaveList)
    };
  
    return (
      <>      
      <ul >
          {faveList.map((todo) => (
            <FaveItem
            key={todo.id}
            todo={todo.title}
            handleStar={handleStar}
            removeStar={removeStar}
            />
          ))} 
        </ul>
      </>
    );
  };
  
  export default FavoritesPage;