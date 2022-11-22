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

test('renders Home navigation link', () => {
    render(<MockHeader />);
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
});

test('renders Favorites navigation link', () => {
    render(<MockHeader />);
    const favoritesLink = screen.getByText(/favorites/i);
    expect(favoritesLink).toBeInTheDocument();
});