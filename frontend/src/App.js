import React from 'react';
import TodoList from "./components/TodoList";
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './pages/Home/Navbar';
import LogInPage from './pages/LogInPage';
import Registration from './pages/Registration';
import Welcome from './pages/Home/Home';
import WeeklyList from './pages/WeeklyList';
// import Calendar from './pages/Home/Calendar';

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
        <Route path="/register" element={<Registration />}>          
        </Route>
        

        {/* Log In */}
        <Route path="/" element ={<LogInPage/>}></Route>

        {/* List */}
        {/* <Route path='/List' element={<TodoList />}></Route> */}

        {/* home */}
        <Route path='/home' element={<Welcome />}></Route>

        {/* FavePage */}
        <Route path='/FavoritesPage' element={<FavoritesPage />}></Route>

        {/* Weekly */}
        <Route path='/Weekly' element={<WeeklyList />}></Route>

      </Routes>
    </>
  );
}
export default App;
