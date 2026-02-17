import { Router } from "express";
import authorize from "../middlewares/auth.middlewear.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptonRouter = Router();

subscriptonRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscription" });
});

subscriptonRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription details" });
});

subscriptonRouter.post("/", authorize, createSubscription);

subscriptonRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription" });
});

subscriptonRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscription" });
});

subscriptonRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user subscription" });
});

subscriptonRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel subscription" });
});

subscriptonRouter.get("/upcoming-renewal", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptonRouter;
