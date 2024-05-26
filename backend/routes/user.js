import { Router } from "express";
import userControllers from "../controllers/user.js";
const router = Router();

// All Routes for '/users'

// Create, List Users
router
  .route("/")
  .post(userControllers.createUser)
  .get(userControllers.getUsers);

// View, Update User
router
  .route("/:id")
  .get(userControllers.getUserById)
  .patch(userControllers.updateUser);

export default router;
