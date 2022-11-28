import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TodoListItem from '../components/TodoListItem'
import { BrowserRouter } from 'react-router-dom';

const mockRemove = jest.fn();

const mockTodoItem = {
    title: 'mock item',
    id: Date.now(),
};

const MockTodoListItem = () => {
    return <TodoListItem todo={mockTodoItem} removeTodo={mockRemove}/>
};

test('renders TodoListItem', () => {
    render(<MockTodoListItem/>);
    screen.debug();
});

test('renders a to do into the list element', () => {
    render(<MockTodoListItem/>);
    const liItem = screen.getByText(/mock item/i);
    expect(liItem).toBeInTheDocument();
});

test('renders favorite button', () => {
    render(<MockTodoListItem/>);
    const favoriteButton = screen.getByText(/favorite/i);
    expect(favoriteButton).toBeInTheDocument();
});

test('renders edit button', () => {
    render(<MockTodoListItem/>);
    const editButton = screen.getByText(/edit/i);
    expect(editButton).toBeInTheDocument();
});

test('renders remove button', () => {
    render(<MockTodoListItem/>);
    const removeButton = screen.getByText(/remove/i);
    expect(removeButton).toBeInTheDocument();
});

test('removes to do on clicking remove button', async () => {
    render(<MockTodoListItem />);
    const liItem = screen.findByText(/mock item/i);
    const removeButton = screen.findByText(/remove/i);
    userEvent.click(removeButton);
    await expect(liItem).not.toBeInTheDocument();
});