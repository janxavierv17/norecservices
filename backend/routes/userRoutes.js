import express from "express";
const router = express.Router();
import { authUser, registerUser, getUserProfile } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

router.route("/").post(registerUser)

// POST(to create) a user
router.post("/login", authUser)

// GET and PUT(to update) request
// To implement middleware we put it as the first argument "protect"
router.route("/profile").get(protect, getUserProfile)


export default router;