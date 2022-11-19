import axios from 'axios';
const listID = '637546f5f78b9f7eafe772ae';
const apiURL = 'http://localhost:3001/api/v1';
const bearerKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzc1NDYxYmY3OGI5ZjdlYWZlNzcyYWIiLCJ1c2VybmFtZSI6ImFsaXNrb3ZldHMiLCJpYXQiOjE2Njg3Mzc4NjYsImV4cCI6MTY2ODgyNDI2Nn0.xD61W9Uff5pp98Z_RLz6aRoCXqRA28DlbksMiNYzEsQ';

class ToDoAPI {
  //Registration

  //LogIn
  //get list of listIDs.

  // Get records

  static async getToDoList(/*apiURL, listID, bearerKey*/) {
    let todoArray = [];
    await axios
      .get(apiURL + `/todos?list=${listID}`, {
        headers: {
          Authorization: `Bearer ${bearerKey}`,
          'Content-Type': 'application/json',
          accept: '*/*',
        },
      })
      .then((result) => {
        todoArray = result.data.todos;
        // return todoArray;
      })
      .catch((error) => console.log('Whoops, something went wrong!', error));

    return todoArray;
  }

  //Add new record

  static async addToDo(/*listID,*/ todo, todoList) {
    return await axios
      .post(
        apiURL + `/todos`,
        {
          list: `${listID}`,
          title: `${todo.title}`,
        },
        {
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${bearerKey}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((result) => {
        return result.data.todo;
      })
      .catch((error) => console.log('Whoops, something went wrong!', error));
  }

  //Change existing record

  //Delete record

  //Move to favourites
}

export default ToDoAPI;
