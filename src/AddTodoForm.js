import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo, onAddInputChange }) => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");

        if (todoTitle !== "") {
            setTodoTitle([{
              id: Date.now(),
              text: todoTitle.trim()
            }]);
            ;
          };
          setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                onChange={onAddInputChange}>
                Title
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;


