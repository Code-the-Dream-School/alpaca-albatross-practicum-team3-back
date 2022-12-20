import axios from 'axios';
//const listID = process.env.REACT_APP_LIST_ID;
//const apiURL = 'http://localhost:3001/api/v1';
//const bearerKey = process.env.REACT_APP_BEARER_KEY;
const apiURL = process.env.REACT_APP_BASE_URL;
class ToDoAPI {
  static async createNewList(/*apiURL,*/ bearerKey) {
    return await axios
      .post(
        apiURL + `/lists`,
        {
          title: 'Default',
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
        return result.data.list._id;
      })
      .catch((error) =>
        console.error('Whoops, something went wrong. Cannot get list ID!', error)
      );
  }

  //get list of listIDs

  static async getListIDs(/*apiURL, */ bearerKey) {
    let listArray = [];
    await axios
      .get(apiURL + `/lists`, {
        headers: {
          Authorization: `Bearer ${bearerKey}`,
          'Content-Type': 'application/json',
          accept: '*/*',
        },
      })
      .then((result) => {
        listArray = result.data.lists;
      })
      .catch((error) => console.error('Whoops, something went wrong!', error));

    return listArray;
  }

  // Get records

  static async getToDoList(/*apiURL,*/ listID, bearerKey) {
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
      })
      .catch((error) => {
        console.error('Whoops, something went wrong!', error);
      });

    return todoArray;
  }

  //Add new record

  static async addToDo(listID, todo, bearerKey) {
    return await axios
      .post(
        apiURL + `/todos`,
        {
          list: `${listID}`, // here --> add link to the user's list
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
      .catch((error) => console.error('Whoops, something went wrong!', error));
  }

  static async addFavToDo(listID, todo, bearerKey) {
    return await axios
      .post(
        apiURL + `/todos`,
        {
          list: `${listID}`,
          title: `${todo.title}`,
          favorite: true,
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
      .catch((error) => console.error('Whoops, something went wrong!', error));
  }

  //Change existing record

  static async updateToDo(newTodo, todoList, bearerKey) {
    return await axios
      .patch(
        apiURL + `/todos/${newTodo._id}`,
        {
          title: `${newTodo.title}`,
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
        const updatedList = todoList.map((todo) =>
          todo._id === newTodo._id ? result.data.todo : todo
        );
        return updatedList;
      })
      .catch((error) => console.error('Whoops, something went wrong!', error));
  }

  static async updateFav(newTodo, todoList, bearerKey) {
    return await axios
      .patch(
        apiURL + `/todos/${newTodo._id}`,
        {
          favorite: `${newTodo.favorite}`,
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
        const updatedList = todoList.map((todo) =>
          todo._id === newTodo._id ? result.data.todo : todo
        );
        return updatedList;
      })
      .catch((error) => console.error('Whoops, something went wrong!', error));
  }

  //Delete record
  static async deleteToDo(/*listID,*/ todo, todoList, bearerKey) {
    return await axios
      .delete(apiURL + `/todos/${todo._id}`, {
        headers: {
          accept: '*/*',
          Authorization: `Bearer ${bearerKey}`,
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        const updatedList = todoList.filter((e) => e._id !== todo._id);
        return updatedList;
      })
      .catch((error) => console.error('Whoops, something went wrong!', error));
  }

  //Move to favorites
}

export default ToDoAPI;
