import React, {useState} from 'react';
import AddTodoLabel from './AddTodoLabel';

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
              title:todoTitle
            }]);
            ;
          };
          setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <AddTodoLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                onChange={onAddInputChange}>
                Title
            </AddTodoLabel>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;


