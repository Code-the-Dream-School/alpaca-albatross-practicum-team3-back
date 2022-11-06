import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FavoritesPage from './FavePage/FavoritesPage';


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
        
        {/* home */}
          <Route path="/" element={
  <>        
            <Link to="/favorites" type="button">Favorites</Link>    
            <h1>Todo List Title</h1>
            <TodoList useSemiPersistentState={useSemiPersistentState}/>
  </>     
        }></Route>

        
        {/* FavePage */}
          <Route path="/Favorites" element={
  <>
            <Link to="/" type="button">Home</Link> 
            <h1>Favorites</h1>
            <FavoritesPage useSemiPersistentState={useSemiPersistentState} />
  </>
        }></Route>
        
        </Routes>
      </BrowserRouter>
  
      );
};
export default App;