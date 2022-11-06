import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from './FavePage/FavoritesPage';
import Header from './Header';


// Function to preserve list upon refresh. Works with local storage.--sb

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
            <Header />
            <h1>Todo List Title</h1>
            <TodoList useSemiPersistentState={useSemiPersistentState}/>
  </>     
        }></Route>

        
        {/* FavePage */}
          <Route path="/Favorites" element={
  <>
            <Header />
            <h1>Favorites</h1>
            <FavoritesPage useSemiPersistentState={useSemiPersistentState} />
  </>
        }></Route>
        
        </Routes>
      </BrowserRouter>
  
      );
};
export default App;