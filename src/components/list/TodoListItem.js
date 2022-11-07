import PlainButton from "../form/PlainButton";

const TodoListItem = ({todo, onRemoveTodo}) => {
  return (
    <li>
      {todo.title}{" "}
      <PlainButton onClicked={() => onRemoveTodo(todo._id)}>Remove</PlainButton>
    </li>
  );
};

export default TodoListItem;
