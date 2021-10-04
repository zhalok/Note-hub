const express = require("express");
const dotenv = require("dotenv");
const app = express();
const books_route = require("./routes/books-route");
const notes_route = require("./routes/notes-route");
const projects_route = require("./routes/projects-route");
const user_route = require("./routes/user-route");
const login_route = require("./routes/login-route");
const signup_route = require("./routes/signup-route");
const mongoose = require("mongoose");
const cors = require("cors");

const questions_route = require("./routes/questions-route");

const contribute_route = require("./routes/contribute-route");

dotenv.config();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow_Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

mongoose
  .connect(
    "mongodb+srv://zhalok:03041959@cluster0.gtdwt.mongodb.net/Database1?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use("/books", books_route);
app.use("/notes", notes_route);
app.use("/questions", questions_route);
app.use("/projects", projects_route);
app.use("/contribute", contribute_route);
app.use("/users", user_route);
app.use("/login", login_route);
app.use("/signup", signup_route);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code);
  res.json({ message: error.message });
});

app.listen(5000);
