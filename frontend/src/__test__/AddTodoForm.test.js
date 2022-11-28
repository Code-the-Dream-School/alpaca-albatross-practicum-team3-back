import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddTodoForm from '../components/AddTodoForm'
import { BrowserRouter } from 'react-router-dom'
import TodoListItem from '../components/TodoListItem'
import TodoList from '../components/TodoList'

const mockAddTodo = jest.fn();

const MockAddTodoForm = () => {
    return (
        <BrowserRouter>
            <AddTodoForm addTodo={mockAddTodo}/>
        </BrowserRouter>
    )
   };

const MockTodoList = () => {
    return (
        <BrowserRouter>
            <TodoList />
        </BrowserRouter>
    )
};

test('able to type in input field', async () => {
    render( <MockAddTodoForm /> );
    const inputField = await screen.findByRole('textbox');
    await userEvent.type(inputField, 'test-1');
    expect(inputField.value).toBe('test-1')
});

test('input field cleared after clicking add button', async () => {
    render( <MockAddTodoForm />);
    const inputField = await screen.findByRole('textbox');
    const addButton = await screen.findByRole('button');
    await userEvent.type(inputField, 'test-2');
    expect(inputField.value).toBe('test-2');
});
