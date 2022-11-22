import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddTodoLabel from '../components/AddTodoLabel'
import { BrowserRouter } from 'react-router-dom';
import { todoList } from '../components/TodoList';
import { userEvent } from '@testing-library/user-event'

const MockAddTodoLabel = () => {
 return (
     <BrowserRouter>
         <AddTodoLabel />
     </BrowserRouter>
 )
};

test('label for input field renders', () => {
    render(<MockAddTodoLabel />);
    expect(screen.getByTestId('inputLabel')).toBeInTheDocument();
});