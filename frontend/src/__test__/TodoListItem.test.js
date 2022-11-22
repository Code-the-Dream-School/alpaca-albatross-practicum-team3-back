import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TodoListItem from '../components/TodoListItem'
import { BrowserRouter } from 'react-router-dom';



test('renders TodoListItem', () => {
    render(<TodoListItem />);
    screen.debug();
});