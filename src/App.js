import React, {useEffect, useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import EditForm from "./EditForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from './FavoritesPage';


// Function to preserve list upon refresh. Works with local storage.

const useSemiPersistentState = () => {
  
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {


  return (
      <BrowserRouter>
      <Routes>
        
          <Route path="/" element={
  <>            
      <h1>Todo List Title</h1>
        <TodoList useSemiPersistentState={useSemiPersistentState}/>
  </>     
        }></Route>

        <Route path="/Favorites" element={
          <>
            <h1>Favorites</h1>
            <FavoritesPage useSemiPersistentState={useSemiPersistentState} />
          </>
        }></Route>
        
       


        
      </Routes>
      </BrowserRouter>
  
      );
};
export default App;