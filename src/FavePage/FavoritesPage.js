import React, { useState } from "react";
import AddTodoLabel from "../AddTodoLabel";




const FavoritesPage = ({ useSemiPersistentState, todoList, handleTitleChange, todoTitle, handleAddTodo, addTodo, setFaveList }) => {

 
  const [starStatus, setStarStatus] = useState([]);
   
  
    //this function receives the todo.id and key and populates them into faveList
    
  
    // const handleStar = (e) => {
    //   let starList = [...starStatus];
    //   if (e.target.starStatus) {
    //     starList = [...starStatus, e.target.value];
    //   } else {
    //     starList.filter(starStatus.indexOf(e.target.value), 1);
    //   }
    //   setStarStatus(starList);
    //   };
  
    // tapping Star button removes todo from list. 
  
      const removeStar = (id) => {
      const newFaveList = todoList.filter((todo) =>
        id !== todo.id);
      setFaveList(newFaveList)
    };
  
  return (
     
    // Testing with AddTodoLabel Component
    <> 
      <form onSubmit={handleAddTodo}>
            <AddTodoLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}>
                Title
            </AddTodoLabel>
            <button type="submit">Add</button>
    </form>
    
 </>
    );
  };
  

//   <>      
//       <ul >
//           {faveList.map((todo) => (
//             <FaveItem
//             key={todo.id}
//             todo={todo.title}
//             handleStar={handleStar}
//             removeStar={removeStar}
//             />
//           ))} 
//         </ul>
// </>
      
  export default FavoritesPage;