const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth = require("./middleware/auth");

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed");
    console.log(err);
});

//Use json middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Import routes
const postRouter = require("./routers/post-router");
const userRouter = require("./routers/user-router");

// Use routes
app.use("/auth", userRouter);
app.use("/posts", auth, postRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
