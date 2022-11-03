import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import CustomButton from "../form/CustomButton";

const ListPane = ({user, todoList, onLogOut, onAddTodo, onRemoveTodo}) => (
  <div>
    <p>&#128100;&nbsp;{user.name}</p>
    <CustomButton type='button' onClick={() => onLogOut()}>
      Log Out
    </CustomButton>
    <AddTodoForm onAddTodo={onAddTodo} />
    <TodoList todoList={todoList} onRemoveTodo={onRemoveTodo} />
  </div>
);

export default ListPane;
