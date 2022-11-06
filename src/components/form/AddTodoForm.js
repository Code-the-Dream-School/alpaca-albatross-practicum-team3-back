import {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import SubmitButton from "./SubmitButton";

// Form component: Adds list item to list onSubmit.

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        type='text'
        name='todo-title'
        placeholder='Add task'
        value={todoTitle}
        onSetValue={setTodoTitle}>
        Task
      </InputWithLabel>
      <SubmitButton>Add</SubmitButton>
    </form>
  );
};

export default AddTodoForm;
