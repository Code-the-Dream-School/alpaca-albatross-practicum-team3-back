import React from "react";

const FaveItem = (todo) => {
    return (<li key={todo.id}>{todo.title}</li>
)};

export default FaveItem;