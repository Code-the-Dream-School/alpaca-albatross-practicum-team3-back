import React, {useState} from "react";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import useSessionPersistentState from "./persistState";
import AuthPane from "./components/auth/AuthPane";
import ListPane from "./components/list/ListPane";
import NotFound from "./components/layout/NotFound";

const App = () => {
  const [token, setToken] = useSessionPersistentState("token", null);
  const [user, setUser] = useSessionPersistentState("user", null);
  const [todoList, setTodoList] = useSessionPersistentState("todos", []);
  const [message, setMessage] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  let navigate = useNavigate();

  // Sign up user
  const register = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();

      if (response.status === 201) {
        setMessage(`Registration successful. Welcome ${data.user.username}.`);
        setToken(data.token);
        setUser({name: data.user.username});
        /*
         fetch todo list/items here
        */
        navigate("/lists");
      } else {
        setMessage(data.msg);
      }
    } catch (err) {
      setMessage("A communications error occurred.");
    }
  };

  // Login user
  const login = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username, password: password}),
      });
      const data = await response.json();

      if (response.status === 200) {
        setMessage(`Login successful. Welcome ${data.user.username}.`);
        setToken(data.token);
        setUser({name: data.user.username});
        /*
         Fetch todo list/items here
        */
        navigate("/lists");
      } else {
        setMessage(data.msg);
      }
    } catch (err) {
      setMessage("A communications error occurred.");
    }
  };

  // Log out
  const logOut = () => {
    setToken(null);
    setUser(null);
    /*
     Set todo list/item state(s) to default here
    */
    setMessage("You are logged out. Bye!");
    navigate("/auth");
  };

  const addTodo = (newTodo) => {
    const newItem = {
      _id: uuidv4(),
      title: newTodo,
    };
    setTodoList([...todoList, newItem]);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((todo) => id !== todo._id);
    setTodoList(newList);
  };

  return (
    <div>
      <main>
        <h1>Title in App.js</h1>
        <p>{message}</p>
        <Routes>
          <Route
            path='auth'
            element={
              token ? (
                <Navigate replace to='/lists' />
              ) : (
                <AuthPane
                  onLogin={login}
                  onSignUp={register}
                  onSetMessage={setMessage}
                />
              )
            }
          />
          <Route
            path='lists'
            element={
              token ? (
                <ListPane
                  user={user}
                  todoList={todoList}
                  onLogOut={logOut}
                  onAddTodo={addTodo}
                  onRemoveTodo={removeTodo}
                />
              ) : (
                <Navigate replace to='/auth' />
              )
            }
          />
          <Route path='/' element={<Navigate replace to='/auth' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
