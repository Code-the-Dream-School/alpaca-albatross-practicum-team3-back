import React from "react";
import TodoList from "../TodoList";


function Welcome(useSemiPersistentState) {

    const msg = "Mikey";

    return (
        <>
            <h1>Welcome {msg}!</h1>
            <h2>What would you like to get done today?</h2>
            <TodoList useSemiPersistentState={useSemiPersistentState} />
        </>
    );
}
export default Welcome;