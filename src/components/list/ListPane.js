import AddTitleForm from "../form/AddTitleForm";
import TodoList from "./TodoList";
import PlainButton from "../form/PlainButton";

const ListPane = ({user, todoList, onLogOut, onAddTodo, onRemoveTodo}) => (
  <div>
    <p>&#128100;&nbsp;{user.name}</p>
    <PlainButton onClicked={onLogOut}>Log Out</PlainButton>
    <AddTitleForm placeholder='Add task' onAddTodo={onAddTodo} />
    <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
  </div>
);

export default ListPane;
