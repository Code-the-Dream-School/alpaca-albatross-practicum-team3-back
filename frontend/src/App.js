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
import MoonIcon from './pages/Home/MoonIcon';
import SunIcon from './pages/Home/SunIcon';
import Switch from './pages/Home/Switch';
import styled, { ThemeProvider } from "styled-components";

// import Calendar from './pages/Home/Calendar';

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  `;

const darkTheme = {
  body: '#1c1c1c',
  title: '#22abfb',
  subtitle: '#b6b6b6',
  icon: '#b6b6b6',
};

const lightTheme = {
  // body:'#22abfb',
  title: '#1c1c1c',
  subtitle: '#333',
  icon:'#1c1c1c',
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
    <SunIcon />
    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <MoonIcon />
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
    </StyledApp>
    </ThemeProvider>
  );
}
export default App;
