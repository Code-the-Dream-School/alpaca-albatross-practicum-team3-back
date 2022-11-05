/*
These tests assume a user with the following properties exists in the database:
{
  username: "Alex Wong",
  password: "#3Dragons?"
}
*/

const request = require("supertest");
const baseURL = "http://localhost:3001/api/v1";

describe("User", () => {
  const user = {};

  describe("Registration", () => {
    describe("POST /api/v1/auth/register", () => {
      beforeEach(() => {
        user.username = "Mike Johnson";
        user.password = "San#3Lung?";
      });

      it("should not create an account without a username", async () => {
        user.username = "";

        const response = await request(baseURL)
          .post("/auth/register")
          .send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual("Please provide a username.");
      });

      it("should not create an account without a password", async () => {
        user.password = "";

        const response = await request(baseURL)
          .post("/auth/register")
          .send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual("Please provide a password.");
      });

      it("should not create an account if format of password is incorrect", async () => {
        user.password = "san#3lung?";

        const response = await request(baseURL)
          .post("/auth/register")
          .send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual(
          "Invalid password. Must have at least one lowercase character, one uppercase character, one digit and one special character (!@$%&?)."
        );
      });

      it("should not create an account if username already exists", async () => {
        user.username = "Alex Wong";

        const response = await request(baseURL)
          .post("/auth/register")
          .send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual(
          "Duplicate value entered for username field. Please choose another value."
        );
      });

      it("should create an account with valid input", async () => {
        const response = await request(baseURL)
          .post("/auth/register")
          .send(user);

        expect(response.status).toEqual(201);
        expect(response.body.user.username).toEqual("Mike Johnson");
      });
    });
  });

  describe("Login", () => {
    describe("POST /api/v1/auth/login", () => {
      beforeEach(() => {
        user.username = "Mike Johnson";
        user.password = "San#3Lung?";
      });

      it("should not login the user without a username", async () => {
        user.username = "";
        const response = await request(baseURL).post("/auth/login").send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual(
          "Please provide username and password."
        );
      });

      it("should not login the user if the username does not exist", async () => {
        user.username = "Happy Mary";
        const response = await request(baseURL).post("/auth/login").send(user);

        expect(response.status).toEqual(401);
        expect(response.body.msg).toEqual("Invalid credentials. No such user.");
      });

      it("should not login the user without user password", async () => {
        user.password = "";
        const response = await request(baseURL).post("/auth/login").send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual(
          "Please provide username and password."
        );
      });

      it("should not login the user if the password is incorrect", async () => {
        user.password = "#3Dragons?";
        const response = await request(baseURL).post("/auth/login").send(user);

        expect(response.status).toEqual(401);
        expect(response.body.msg).toEqual(
          "Invalid credentials. Incorrect password."
        );
      });

      it("should login the user with valid input", async () => {
        const response = await request(baseURL).post("/auth/login").send(user);

        expect(response.status).toEqual(200);
        expect(response.body.user.username).toEqual("Mike Johnson");
      });
    });
  });

  describe("Deactivate", () => {
    describe("POST /api/v1/auth/deactivate", () => {
      beforeEach(() => {
        user.username = "Mike Johnson";
        user.password = "San#3Lung?";
      });

      it("should not deactivate account without a username", async () => {
        user.username = "";
        const response = await request(baseURL)
          .post("/auth/deactivate")
          .send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual(
          "Please provide username and password."
        );
      });

      it("should not deactivate account if the username does not exist", async () => {
        user.username = "Happy Mary";
        const response = await request(baseURL)
          .post("/auth/deactivate")
          .send(user);

        expect(response.status).toEqual(401);
        expect(response.body.msg).toEqual("Invalid credentials. No such user.");
      });

      it("should not deactivate account without user password", async () => {
        user.password = "";
        const response = await request(baseURL)
          .post("/auth/deactivate")
          .send(user);

        expect(response.status).toEqual(400);
        expect(response.body.msg).toEqual(
          "Please provide username and password."
        );
      });

      it("should not deactivate account if the password is incorrect", async () => {
        user.password = "#3Dragons?";
        const response = await request(baseURL)
          .post("/auth/deactivate")
          .send(user);

        expect(response.status).toEqual(401);
        expect(response.body.msg).toEqual(
          "Invalid credentials. Incorrect password."
        );
      });

      it("should deactivate user account with valid input", async () => {
        const response = await request(baseURL)
          .post("/auth/deactivate")
          .send(user);

        expect(response.status).toEqual(200);
        expect(response.body.msg).toEqual(
          `User ${user.username} and 0 to-do list(s) and 0 to-do item(s) have been deleted`
        );
      });
    });
  });
});
