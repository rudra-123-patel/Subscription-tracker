import { Router } from "express";
import authorize from "../middlewares/auth.middlewear.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "Create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update user" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delte user" });
});

export default userRouter;
