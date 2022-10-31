import React, {useEffect, useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import EditForm from "./EditForm";


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

  const [todoList, setTodoList] = useSemiPersistentState();
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) =>
      id !== todo.id);
    setTodoList(newTodoList)
  };

  const handleAddInputChange = (e) => {
    setTodoList(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
    console.log(currentTodo);
  };


  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.title, currentTodo);
  };
  
  const handleUpdateTodo = (todoTitle, updatedTodo) => {
    const updatedItem = todoTitle.map((todo) => {
      return todo.title === todo.title ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodoList(updatedItem);
  };

  const handleEditClick = (todoTitle) => {
    setIsEditing(true);
    setCurrentTodo({ ...todoTitle });
  };


  return (
    <>
      <h1>Todo List Title</h1>

      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
          <AddTodoForm
            onAddTodo={addTodo}
            onAddInputChange={handleAddInputChange}
          />
      )}

        <TodoList
          todoList={todoList}
          onRemoveTodo={removeTodo}
          onEditClick={handleEditClick}
        />
      
    </>
      );
};
export default App;