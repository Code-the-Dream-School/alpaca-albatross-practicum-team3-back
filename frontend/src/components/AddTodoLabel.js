import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

//Function for focused input field and the prop types it would accept--sb

const AddTodoLabel = ({ children, todoTitle, handleTitleChange }) => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });
    
    return (
        <>
            <label className='title' htmlFor="todoTitle">{children} </label>
            <input className='todo-input'
                ref={inputRef}
                type="text"
                name="title"
                id="todoTitle"
                value={todoTitle}
                onChange={handleTitleChange} />  
        </>
    );
};

AddTodoLabel.propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.string,
  };
export default AddTodoLabel;
