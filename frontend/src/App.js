import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { Routes, Route, Navigate } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './pages/Home/Navbar';
import LogInPage from './pages/LogInPage';
import Registration from './pages/Registration';
import Home from './pages/Home/Home';
import MonthlyList from './pages/MonthlyList';
import WeeklyList from './pages/WeeklyList';
import { PrivateRoute } from './components/PrivateRoute';

// import Calendar from './pages/Home/Calendar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Registration */}
        <Route path='/register' element={<Registration />}></Route>

        {/* Log In */}
        <Route exact path='/' element={<LogInPage />}></Route>

        {/* List */}
        {/* <Route path='/List' element={<TodoList />}></Route> */}

        {/* home */}
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>

        {/* FavePage */}
        <Route
          path='/FavoritesPage'
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        ></Route>

        {/* Monthly */}
        <Route
          path='/Monthly'
          element={
            <PrivateRoute>
              <MonthlyList />
            </PrivateRoute>
          }
        ></Route>

        {/* Weekly */}
        <Route
          path='/Weekly'
          element={
            <PrivateRoute>
              <WeeklyList />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}
export default App;
