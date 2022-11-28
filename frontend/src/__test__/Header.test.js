import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header'

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

test('renders create account navigation link', () => {
    render(<MockHeader />);
    const createAccountLink = screen.getByText(/create an account/i);
    expect(createAccountLink).toBeInTheDocument();
});

test('renders login navigation link', () => {
    render(<MockHeader />);
    const loginLink = screen.getByText(/log in/i);
    expect(loginLink).toBeInTheDocument();
});

test('renders List navigation link', () => {
    render(<MockHeader />);
    const listLink = screen.getByText(/list/i);
    expect(listLink).toBeInTheDocument();
});

test('renders Favorites navigation link', () => {
    render(<MockHeader />);
    const favoritesLink = screen.getByText(/favorites/i);
    expect(favoritesLink).toBeInTheDocument();
});