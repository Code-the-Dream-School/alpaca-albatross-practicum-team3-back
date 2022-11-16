




// test('we create a entry', async() => {
//     render(<App />);
//     const iptext = await screen.queryByAltText('iptext')
//     const add_button = await screen.queryByAltText('img1')
//     // First we create a dummy todo by entering text in the input textbox and firing the add button
//     fireEvent.change(iptext, {target: { value: "testip" } });
//     fireEvent.click(add_button)
//     })`


// test('clicking add button renders new item in list', async() => {
//     render(<MockAddTodoForm />);
//     const inputField = await screen.findByAltText(/input/i);
//     const addButton = await screen.findByText(/add/i);
//     await userEvent.type(inputField, 'test input');
//     await userEvent.click(addButton);
//     render(<MockTodoList />)
//     const list = await screen.findByTestId('ul');
//     expect(list).toContain('test input');
//         // userEvent.click(addButton);
//         // expect(todoList.length().toBe(2));
// });