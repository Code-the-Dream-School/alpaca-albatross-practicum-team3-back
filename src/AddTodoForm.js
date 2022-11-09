import React, {useState} from 'react';
import AddTodoLabel from './AddTodoLabel';


// This function assembles form with input field--sb 

const AddTodoForm = ({ addTodo }) => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <AddTodoLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}>
                Title
            </AddTodoLabel>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;


