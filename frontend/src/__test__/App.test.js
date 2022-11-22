import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom';
import { todoList } from '../components/TodoList';
import { userEvent } from '@testing-library/user-event'

const MockApp = () => {
 return (
     <BrowserRouter>
         <App />
     </BrowserRouter>
 )
};

// tests based on existing skeleton for to do app
// test('render App component elements', () => {
//     render(<MockApp />);
//     // display HTML visible to users
//     screen.debug();
// })

test('Add button renders', () => {
    render(<MockApp />);
    // expect(screen.getByText(/add/i)).toBeInTheDocument();
    // screen.getByRole('button', {name: "Submit"}); // if multiple buttons exist on the page, can provide additional attribute information about the specific button we want to test in an object as the second param of .getByRole()
    expect(screen.getByRole('button')).toBeInTheDocument();

});

// testing strategy: app contains multiple components each with their own expected functionality
// unit tests for individual functions, not ideal for most React web apps that don't included deep JS logic 
// component tests are a level up from unit tests, ensure the look and functionality of the component works as expected

// test structure: test block contains 1. description of what we are testing, 2. the component we are testing by rendering it into virtual DOM for testing, 3. find the elements we want to interact with, 4. interact with the found elements, 5. assert the results are as expected

// "data-testid" is an attribute that can be assigned to elements on the page specifically for testing purposes

// getBy, findBY, queryBy => getBy cannot handle when an element does not exist on the page or async tests, findBy is for testing async, queryBy, can be used to assert that an element does NOT exist on the page (getBy and findBy throw an error/fail when the element is not found but queryBy returns null when not found)

// rendering elements when using Browser Router: 
// create a MockComponent that takes in any appropriate props and returns JSX such as 
// const MockComponent = ({props}) => {
//  return (
//      <BrowserRouter>
//          <MyComponent
//              props={props}
//          </MyComponent>
//      </BrowserRouter>
//  )
// }


// tests required for: 
// register page - username input, password input, and submit button render; username and password are stored in MongoDB onClick of submit button (this should be covered in the back end testing using Jest); username renders on the next page (i.e. "registration successful - Welcome {username}") -- async test
// describe('registration page renders inputs for username, password, submit button', () => {
//     test('username input field renders', () => {
//         render (<App />);
//         expect(screen.getByPlaceholderText(/username/i).toBeInTheDocument());
//     });

//     test('password input field renders', () => {
//         render (<App />);
//         expect(screen.getByPlaceholderText(/password/i).toBeInTheDocument())
//     });

//     test('submit button renders', () => {
//         render (<App />);
//         screen.getByRole('button');
//     });
// });

// login page - username, password, submit button all render; username and password searched in database and if match exists, user logged in onClick of submit button and home page renders with users data - if no match, registration page should render -- async test
// describe('login page renders inputs for username, password, submit button', () => {
//     test('username input field renders', () => {
//         render (<App />);
//         expect(screen.getByPlaceholderText(/username/i).toBeInTheDocument());
//     });

//     test('password input field renders', () => {
//         render (<App />);
//         expect(screen.getByPlaceholderText(/password/i).toBeInTheDocument())
//     });

//     test('submit button renders', () => {
//         render (<App />);
//         screen.getByRole('button');
//     });
// });

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
// describe('light and dark mode toggle icons render', () => {
//     test('light mode icon renders', () => {
//         render (<App />);
//         expect(screen.getByTitle(/light/i).toBeInTheDocument());
//     });

//     test('dark mode icon renders', () => {
//         render (<App />);
//         expect(screen.getByTitle(/dark/i).toBeInTheDocument())
//     });
// })

// set alarm
// display calendar
// access settings
// set color
// set Font
