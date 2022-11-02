import React from "react";

const EditForm = ({ setTodoList, setCurrentTodo, currentTodo, setIsEditing }) => {

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

    return (
        <form onSubmit={handleEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="updateTodo"> UpdateTodo: </label>
            <input
                autoFocus="autofocus"
                type="text"
                value={currentTodo.Title}
                onChange={(e) => {
                    this.cursor = e.target.selectionStart;
                    this.setState({value: e.target.value});
                  }
                }
                onFocus={(e) => {
                    e.target.selectionStart = this.cursor;
                  }
                }
              
                // name="updateTodo"
                // type="text"
                // value={currentTodo.title}
                // onChange={handleEditInputChange}
            />
            <button type="submit" onClick={handleEditFormSubmit}>Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
};

export default EditForm;