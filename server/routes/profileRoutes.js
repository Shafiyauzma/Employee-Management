import { Router } from "express";
import { getProfile, UpdateProfile } from "../controllers/profileController.js";
import { protect } from "../middleware/auth.js";

const profileRouter = Router();

profileRouter.get("/", protect, getProfile)
profileRouter.post("/", protect, UpdateProfile)

export default profileRouter;

