import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import { Routes, Route, Navigate } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './pages/Home/Navbar';
import LogInPage from './pages/LogInPage';
import Registration from './pages/Registration';
import Home from './pages/Home/Home';
import MonthlyList from './pages/MonthlyList';
import WeeklyList from './pages/WeeklyList';
import SuggestionsList from './components/SuggestionsList';

// import Calendar from './pages/Home/Calendar';

function App() {

  return (
    <>
      <Navbar />
      <SuggestionsList/>
      <Routes>

        {/* Registration */}
        <Route path="/register" element={<Registration />}>          
        </Route>
        

        {/* Log In */}
        <Route path="/" element ={<LogInPage/>}></Route>

        {/* List */}
        {/* <Route path='/List' element={<TodoList />}></Route> */}

        {/* home */}
        <Route path='/home' element={<Home />}></Route>

        {/* FavePage */}
        <Route path='/FavoritesPage' element={<FavoritesPage />}></Route>

        {/* Monthly */}
        <Route path='/Monthly' element={<MonthlyList />}></Route>
        
        {/* Weekly */}
        <Route path='/Weekly' element={<WeeklyList />}></Route>

      </Routes>
    </>
  );
}
export default App;
