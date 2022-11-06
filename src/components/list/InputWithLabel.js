import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

//Function for reusable id with focused input field

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });
    
    return (
        <>
            <label htmlFor="todoTitle">{children} </label>
            <input ref={inputRef} type="text" name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange} />
        </>
    );
};

InputWithLabel.propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.string,
  };
export default InputWithLabel;
