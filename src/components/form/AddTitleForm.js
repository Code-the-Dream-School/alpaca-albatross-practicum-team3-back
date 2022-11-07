import {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import SubmitButton from "./SubmitButton";

// Form component: Adds list item to list onSubmit.

const AddTitleForm = ({placeholder, onAddTodo}) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        type='text'
        name='todo-title'
        placeholder={placeholder}
        value={title}
        onSetValue={setTitle}>
        &#65291;
      </InputWithLabel>
      <SubmitButton>Add</SubmitButton>
    </form>
  );
};

export default AddTitleForm;
