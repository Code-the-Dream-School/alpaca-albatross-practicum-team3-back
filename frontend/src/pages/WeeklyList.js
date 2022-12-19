import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import Speech from './Home/Speech'

function WeeklyList (){
    return (
        <div className="weeklyList" style={{marginTop:"110px"}}>
            <Speech />
            <TodoList />
        </div>
    )
}
export default WeeklyList