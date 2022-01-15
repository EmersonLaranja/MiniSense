import { Router } from "express";

import { usersRoute } from "./users.routes";

const router = Router();

router.get("/", () => console.log("oi"));
router.use("/users", usersRoute);
