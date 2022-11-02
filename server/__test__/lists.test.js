const request = require("supertest");
const baseURL = "http://localhost:3001/api/v1";

describe("ToDoList", () => {
  let token;
  let listId;
  beforeAll(async () => {
    const response = await request(baseURL).post("/auth/register").send({
      username: "Mike Johnson",
      password: "San#3Lung?",
    });
    token = response.body.token;
  });

  afterAll(async () => {
    await request(baseURL).post("/auth/deactivate").send({
      username: "Mike Johnson",
      password: "San#3Lung?",
    });
  });

  describe("POST /lists", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .send({title: "Prep for Job Interviews"});

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not create a todo list entry if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .set("Authorization", `Bearer ${token.slice(1)}`)
        .send({title: "Prep for Job Interviews"});

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not create a todo list entry without a title", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .set("Authorization", `Bearer ${token}`)
        .send({title: ""});

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "Please provide a title for the to-do list."
      );
    });

    it("should not create a todo list entry with only white space charachers", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .set("Authorization", `Bearer ${token}`)
        .send({title: "   "});

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "A to do list cannot be all white spaces."
      );
    });

    it("should not create a todo list entry with less than 3 charachers", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .set("Authorization", `Bearer ${token}`)
        .send({title: "hi"});

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "Path `title` (`hi`) is shorter than the minimum allowed length (3)."
      );
    });

    it("should not create a todo list entry with more than 50 charachers", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        });

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual(
        "Path `title` (`hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`) is longer than the maximum allowed length (50)."
      );
    });

    it("should create a todo list entry with valid input", async () => {
      const response = await request(baseURL)
        .post("/lists")
        .set("Authorization", `Bearer ${token}`)
        .send({title: "Prep for Job Interviews"});

      expect(response.status).toEqual(201);
      expect(response.type).toBe("application/json");

      listId = response.body.list._id;
    });
  });

  describe("GET /lists", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).get("/lists");

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not fetch the todo list entries if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .get("/lists")
        .set("Authorization", `Bearer ${token.slice(1)}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should fetch all the todo list entries when authenticated", async () => {
      const response = await request(baseURL)
        .get("/lists")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
      expect(response.type).toBe("application/json");
    });
  });

  describe("GET /lists/:id", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).get(`/lists/${listId}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not fetch the todo list entry if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .get(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token.slice(1)}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not fetch the todo list entry if param listId is invalid", async () => {
      const response = await request(baseURL)
        .get(`/lists/${listId.slice(1)}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo list is found that matches your request."
      );
    });

    it("should fetch the todo list entry with valid input", async () => {
      const response = await request(baseURL)
        .get(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
      expect(response.type).toBe("application/json");
    });
  });

  describe("PATCH /lists/:id", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL)
        .patch(`/lists/${listId}`)
        .send({title: "Prepare for Job Interviews"});

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not update the todo list entry if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .patch(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token.slice(1)}`)
        .send({title: "Prepare for Job Interviews"});

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not update the todo list entry if param listId is invalid", async () => {
      const response = await request(baseURL)
        .patch(`/lists/${listId.slice(1)}`)
        .set("Authorization", `Bearer ${token}`)
        .send({title: "Prepare for Job Interviews"});

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo list is found that matches your request."
      );
    });

    it("should not update the todo list entry without a title", async () => {
      const response = await request(baseURL)
        .patch(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({title: ""});

      expect(response.status).toEqual(400);
      expect(response.body.msg).toEqual("Title field cannot be empty");
    });

    it("should update the todo list entry with valid input", async () => {
      const response = await request(baseURL)
        .patch(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({title: "Prepare for Job Interviews"});

      expect(response.status).toEqual(200);
      expect(response.type).toBe("application/json");
    });
  });

  describe("DELETE /lists/:id", () => {
    it("should require authentication with JWT-token", async () => {
      const response = await request(baseURL).delete(`/lists/${listId}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not delete the todo list entry if JWT-token is invalid", async () => {
      const response = await request(baseURL)
        .delete(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token.slice(1)}`);

      expect(response.status).toEqual(401);
      expect(response.body.msg).toEqual("Authentication invalid.");
    });

    it("should not delete the todo list entry if param listId is invalid", async () => {
      const response = await request(baseURL)
        .delete(`/lists/${listId.slice(1)}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(404);
      expect(response.body.msg).toEqual(
        "No todo list is found that matches your request."
      );
    });

    it("should delete the todo list and item entries when request is authenticated", async () => {
      const response = await request(baseURL)
        .delete(`/lists/${listId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(200);
      // 0 to-do items if database has no data
      expect(response.body.msg).toEqual(
        `The todo list and 0 to-do item(s) have been deleted`
      );
    });
  });
});
