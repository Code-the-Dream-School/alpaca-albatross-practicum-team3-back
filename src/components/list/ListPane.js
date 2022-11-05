import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import LogOutButton from "../form/LogOutButton";

const ListPane = ({user, todoList, onLogOut, onAddTodo, onRemoveTodo}) => (
  <div>
    <p>&#128100;&nbsp;{user.name}</p>
    <LogOutButton onClicked={onLogOut}>Log Out</LogOutButton>
    <AddTodoForm onAddTodo={onAddTodo} />
    <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
  </div>
);

export default ListPane;
