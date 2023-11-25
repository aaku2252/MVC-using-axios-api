// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import { userController } from "./src/controllers/users.controller.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join("src", "views"));

// Implement Express GET route at the path "/users"  here
app.get("/users", userController);

export default app;
