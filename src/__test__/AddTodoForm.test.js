import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AddTodoForm from '../AddTodoForm'
import { BrowserRouter } from 'react-router-dom';


const mockAddTodo = jest.fn();



const MockAddTodoForm = () => {
    return (
        <BrowserRouter>
            <AddTodoForm mockAddTodo={mockAddTodo}/>
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
    userEvent.type(inputField, 'test-2');
    expect(inputField.value).toBe('test-2');
    await userEvent.click(addButton);
    expect(inputField.value).toBe('');
});