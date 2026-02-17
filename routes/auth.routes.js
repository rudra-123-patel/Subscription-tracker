import { Router } from "express";
const authRouter = Router();
import { signup, signin, signout } from "../controllers/auth.controller.js";

//path : /api/v1/auth/sign-up (post)
authRouter.post("/sign-up", signup);

//path : /api/v1/auth/sign-in (post)
authRouter.post("/sign-in", signin);

//path : /api/v1/auth/sign-out (post)
authRouter.post("/sign-out", signout);

export default authRouter;
