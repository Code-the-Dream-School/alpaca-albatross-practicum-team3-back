import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';

// Form component: Adds list item to list onSubmit. Uses new Date().getTime() to create unique key for each child.

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({ title: todoTitle, id: new Date().getTime() });
        setTodoTitle("");
    };

    return (
        
        <form onSubmit={handleAddTodo}>
                <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Task
                </InputWithLabel>
            <button type="submit">Add</button>
            </form>
    
    );
};

export default AddTodoForm;

