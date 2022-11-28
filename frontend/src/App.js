import React from 'react';
import TodoList from "./components/TodoList";
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Home/Navbar';
import LogInPage from './pages/LogInPage';
import Registration from './pages/Registration';
import Welcome from './components/Home/Home';

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
      <Navbar />
      <Routes>

        {/* Registration */}
        <Route path="/" element={<Registration />}>          
        </Route>
        

        {/* Log In */}
        <Route path="/login" element ={<LogInPage/>}>
        </Route>

        {/* List */}
        <Route path='/List' element={<TodoList />}></Route>

        {/* home */}
        <Route path='/' element={<Welcome />}></Route>

        {/* FavePage */}
        <Route path='/Favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
