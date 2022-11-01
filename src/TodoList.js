import React, {useState} from 'react';
import AddTodoForm from './Forms.js/AddTodoForm';
import TodoListItem from "./TodoListItem"

//function to assemble and dissemble list.

const TodoList = ({ useSemiPersistentState }) => {

  const [todoList, setTodoList] = useSemiPersistentState();
  const [currentTodo, setCurrentTodo] = useState({});

  const handleAddInputChange = (e) => {
    setTodoList(e.target.value);
  };


  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) =>
      id !== todo.id);
    setTodoList(newTodoList)
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} handleAddInputChange={handleAddInputChange} />
    <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={removeTodo}
            setCurrentTodo={setCurrentTodo}
            currentTodo={currentTodo}
          />
        ))} 
      </ul>
    </>
  );
};

export default TodoList;