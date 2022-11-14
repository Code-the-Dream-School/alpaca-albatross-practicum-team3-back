import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddTodoForm from '../AddTodoForm'
import { BrowserRouter } from 'react-router-dom';
import { todoList } from '../TodoList';
import { userEvent } from '@testing-library/user-event'

const MockAddTodoForm = () => {
    return (
        <BrowserRouter>
            <AddTodoForm />
        </BrowserRouter>
    )
   };

// test('we create a entry', async() => {
//     render(<App />);
//     const iptext = await screen.queryByAltText('iptext')
//     const add_button = await screen.queryByAltText('img1')
//     // First we create a dummy todo by entering text in the input textbox and firing the add button
//     fireEvent.change(iptext, {target: { value: "testip" } });
//     fireEvent.click(add_button)
//     })`


test('clicking add button renders new item in list', async() => {
    render(<MockAddTodoForm />);
    const inputField = await screen.getByAltText(/input/i);
    const addButton = await screen.getByText(/add/i);
    userEvent.type(inputField, 'test input');
    expect(inputField.value.toBe('test input'))
    // userEvent.click(addButton);
    // expect(todoList.length.toBe(1));
        // userEvent.click(addButton);
        // expect(todoList.length().toBe(2));
});