import React, {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import TodoListItem from "./TodoListItem"


//function to assemble and dissemble list.

const TodoList = ({ useSemiPersistentState }) => {

  const [todoList, setTodoList] = useSemiPersistentState();
  const [checked, setChecked] = useState([]);

  // Checkbox. Add Strikethrough in css. Can use: const isChecked = (todo) =>checked.includes(todo) ? "checked-todo" : "not-checked-todo"; <span className={isChecked(item)}>{item}</span> .checked-item {text-decoration: line-through;}

const handleCheck = (e) => {
  let updatedList = [...checked];
  if (e.target.checked) {
    updatedList = [...checked, e.target.value];
  } else {
    updatedList.splice(checked.indexOf(e.target.value), 1);
  }
  setChecked(updatedList);
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
      <AddTodoForm addTodo={addTodo}/>
      
    <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleCheck={handleCheck}
            onRemoveTodo={removeTodo}
          />
        ))} 
      </ul>
    </>
  );
};

export default TodoList;