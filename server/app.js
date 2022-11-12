require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");

// Swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// express
const express = require("express");
const app = express();
const path = require("path");
// database/auth middleware
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");
// routers
const authRouter = require("./routes/auth");
const listsRouter = require("./routes/lists");
const todosRouter = require("./routes/todos");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests/windowMs
  })
);
// load React /build/index.html first
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// documentation route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/lists", authenticateUser, listsRouter);
app.use("/api/v1/todos", authenticateUser, todosRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// pick up client-side routes from /build/index.html
app.use((req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "build", "index.html"))
);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
