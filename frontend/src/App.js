import React from 'react';
import TodoList from "./components/TodoList";
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';
import LogInPage from './pages/LogInPage';

// Function to preserve list upon refresh. Works with local storage.--sb

/*const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};*/

function App() {
  return (
    <>
      <Header />
      <Routes>

        {/* Log In */}
        <Route path="/login" element ={<LogInPage/>}>
        </Route>

        {/* home */}
        <Route path='/' element={<TodoList />}></Route>

        {/* FavePage */}
        <Route path='/Favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
