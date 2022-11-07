import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

// tests based on existing skeleton for to do app
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





// tests required for: 
// register page
describe('registration page renders inputs for username, password, submit button', () => {
    test('username input field renders', () => {
        render (<App />);
        expect(screen.getByPlaceholderText(/username/i).toBeInTheDocument());
    });

    test('password input field renders', () => {
        render (<App />);
        expect(screen.getByPlaceholderText(/password/i).toBeInTheDocument())
    });

    test('submit button renders', () => {
        render (<App />);
        screen.getByRole('button');
    });
})

// login page
describe('login page renders inputs for username, password, submit button', () => {
    test('username input field renders', () => {
        render (<App />);
        expect(screen.getByPlaceholderText(/username/i).toBeInTheDocument());
    });

    test('password input field renders', () => {
        render (<App />);
        expect(screen.getByPlaceholderText(/password/i).toBeInTheDocument())
    });

    test('submit button renders', () => {
        render (<App />);
        screen.getByRole('button');
    });
})

// create list

// create to do
// switch tabs/lists
// edit list name
// edit to do
// mark to do DONE
// delete list
// delete to do
// go to Favorites list
// add favorites
// go home
// auto complete input field (from Faves)
// toggle light/dark mode
describe('light and dark mode toggle icons render', () => {
    test('light mode icon renders', () => {
        render (<App />);
        expect(screen.getByTitle(/light/i).toBeInTheDocument());
    });

    test('dark mode icon renders', () => {
        render (<App />);
        expect(screen.getByTitle(/dark/i).toBeInTheDocument())
    });
})

// set alarm
// display calendar
// access settings
// set color
// set Font
