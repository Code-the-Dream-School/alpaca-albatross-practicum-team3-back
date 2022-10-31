import React from "react";

const EditForm = ({ currentTodo, setIsEditing, onEditInputChange, onEditFormSubmit }) =>

{
    return (
        <form onSubmit={onEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="updateTodo"> UpdateTodo: </label>
            <input
                name="updateTodo"
                type="text"
                value={currentTodo.title}
                onChange={onEditInputChange}
            />
            <button type="submit" onclick={onEditFormSubmit}>Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
};

export default EditForm;