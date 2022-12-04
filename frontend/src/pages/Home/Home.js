import React from "react";
import TodoList from "../../components/TodoList";



function Welcome(useSemiPersistentState) {

    // msg will be {userName}?

    const msg = "Mikey"; 

    return (
        <>
            <h1 className='welcome'>Welcome {msg}!</h1>
            <h2 className='question'>What would you like to get done today?</h2>
            <TodoList useSemiPersistentState={useSemiPersistentState} />
        </>
    );
}
export default Welcome;