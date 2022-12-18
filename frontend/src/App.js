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
import Switch from './pages/Home/Switch';
import styled, { ThemeProvider } from "styled-components";
import { PrivateRoute } from './components/PrivateRoute';

// import Calendar from './pages/Home/Calendar';

const StyledApp = styled.div`
  min-height: 100vh;
  background-image: ${(props) => props.theme.body};
  // color: ${(props) => props.theme.text};
  `;

const darkTheme = {
  body: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .9))',
  text: '#EDEFFA',
  title: '#22abfb',
  // subtitle: '#b6b6b6',
  // icon: '#b6b6b6',
};

const lightTheme = {
  // body:'#22abfb',
  // title: '#1c1c1c',
  // subtitle: '#333',
  // icon:'#1c1c1c',
};

function App() {
const [theme, setTheme] = useState('light');
const isDarkTheme = theme === 'dark';

const toggleTheme = () => {
  setTheme(isDarkTheme ? 'light' : 'dark');
}
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <StyledApp>
    <Navbar />
    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
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
    </StyledApp>
    </ThemeProvider>
  );
}
export default App;
