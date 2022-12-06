import React, {useState} from "react";
import TodoList from "../../components/TodoList";
import Speech from "./Speech";



function Welcome(useSemiPersistentState) {

    const [spokenTodoItem, setSpokenTodoItem] = useState([]);

    const handleSpokenTodo = (spokenMsg) => {
        setSpokenTodoItem([...spokenTodoItem,  spokenMsg])
    }
    // msg will be {userName}?

    const msg = "Mikey"; 

    return (
        <>
            <h1 className='welcome'>Welcome {msg}!</h1>
            <h2 className='question'>What would you like to get done today?</h2>
            <Speech spokenTodoItem={spokenTodoItem} handleSpokenTodo={handleSpokenTodo}/>
            <TodoList useSemiPersistentState={useSemiPersistentState} spokenTodoItem={spokenTodoItem}/>
        </>
    );
}
export default Welcome;