import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders App component', () => {
    render (<App />);
    // display HTML visible to users
    screen.debug();
})

test('label for input field renders', () => {
    render (<App />);
    expect(screen.getByText(/task/i)).toBeInTheDocument();
});

test('Add button renders', () => {
    render (<App />);
    // expect(screen.getByText(/add/i)).toBeInTheDocument();
    screen.getByRole('button');
});