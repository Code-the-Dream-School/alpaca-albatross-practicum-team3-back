const request = require("supertest");
const baseURL = "http://localhost:3001/api/v1";

describe("Todo", () => {
  let token;
  let listId;
  let todoId;
  beforeAll(async () => {
    const authResponse = await request(baseURL).post("/auth/register").send({
      username: "Mike Johnson",
      password: "San#3Lung?",
    });
    token = authResponse.body.token;

    const listResponse = await request(baseURL)
      .post("/lists")
      .send({title: "Prepare for Job Interviews"})
      .set("Authorization", `Bearer ${token}`);
    listId = listResponse.body.list._id;
  });

  afterAll(async () => {
    await request(baseURL)
      .delete("/lists/${listId}")
      .set("Authorization", `Bearer ${token}`);
    await request(baseURL).post("/auth/deactivate").send({
      username: "Mike Johnson",
      password: "San#3Lung?",
    });
  });

  const reqBody = {
    list: listId,
    title:
      "Study data structure and algorithm and understand time complexity and call stack",
  };

  describe("POST /todos", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).post("/todos").send(reqBody);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not create a todo item if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token.slice(1)}`)
        .send(reqBody);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not create a todo item without a listId", async () => {
      reqBody.list = "";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual("List field cannot be empty.");
    });

    it("should not create a todo item with an invalid listId", async () => {
      reqBody.list = "123456789";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo list is found that matches your request."
      );
    });

    it("should not create a todo item without a title", async () => {
      reqBody.list = listId;
      reqBody.title = "";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual("Please describe what's to be done.");
    });

    it("should not create a todo item with only white space characters", async () => {
      reqBody.title = "   ";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "A to do item cannot be all whitespaces."
      );
    });

    it("should not create a todo item with less than 3 characters", async () => {
      reqBody.title = "hi";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "Path `title` (`am`) is shorter than the minimum allowed length (3)."
      );
    });

    it("should not create a todo item with more than 150 characters", async () => {
      reqBody.title =
        "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "Path `title` (`hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`) is longer than the maximum allowed length (150)."
      );
    });

    it("should create a todo item with valid input", async () => {
      reqBody.title =
        "Study data structure and algorithm and understand time complexity and call stack";
      const response = await request(baseURL)
        .post("/todos")
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(201);
      expect(response.type).toBe("application/json");

      todoId = response.body.todo._id;
    });
  });

  describe("GET /todos", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).get("/todos");

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not fetch the todo items if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .get("/todos")
        .set("Authorization", `Bearer ${token.slice(1)}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should fetch all the todo items when authenticated", async () => {
      const response = await request(baseURL)
        .get("/todos")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
      expect(response.type).toBe("application/json");
    });
  });

  describe("GET /todos/:id", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).get(`/todos/${todoId}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not fetch the todo item if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .get(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token.slice(1)}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not fetch the todo item if param todoId is invalid", async () => {
      const response = await request(baseURL)
        .get(`/todos/${todoId.slice(1)}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo item is found that matches your request."
      );
    });

    it("should fetch the todo item with valid input", async () => {
      const response = await request(baseURL)
        .get(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
      expect(response.type).toBe("application/json");
    });
  });

  describe("PATCH /todos/:id", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL)
        .patch(`/todos/${todoId}`)
        .send(reqBody);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not update the todo item if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .patch(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token.slice(1)}`)
        .send(reqBody);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not update the todo item if param todoId is invalid", async () => {
      const response = await request(baseURL)
        .patch(`/todos/${todoId.slice(1)}`)
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo item is found that matches your request."
      );
    });

    it("should not update the todo item without a title", async () => {
      reqBody.title = "";
      const response = await request(baseURL)
        .patch(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual("Title field cannot be empty.");
    });

    it("should update the todo item with valid input", async () => {
      reqBody.title =
        "Study data structure and algorithm and understand time complexity and call stack";
      const response = await request(baseURL)
        .patch(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token}`)
        .send(reqBody);

      expect(response.status).toEqual(200);
      expect(response.type).toBe("application/json");
    });
  });

  describe("DELETE /todos/:id", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).delete(`/todos/${todoId}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not delete the todo item if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .delete(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token.slice(1)}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not delete the todo item if param todoId is invalid", async () => {
      const response = await request(baseURL)
        .delete(`/todos/${todoId.slice(1)}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo item is found that matches your request."
      );
    });

    it("should delete the todo item when request is authenticated", async () => {
      const response = await request(baseURL)
        .delete(`/todos/${todoId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
      expect(response.body.msg).toEqual("The todo item has been deleted.");
    });
  });
});
